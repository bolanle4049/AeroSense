// const socket = io();

/* ── LAVATORY STATE ── */
let motionTimer = null;
let lavatoryState = "VACANT";

/* ── DOM REFERENCES ── */
const slider         = document.getElementById('brightnessSlider');
const cabinLight     = document.getElementById('cabinLight');
const brightnessVal  = document.getElementById('brightnessValue');
const intensityBadge = document.getElementById('intensityBadge');

/* ── STATE ── */
let emergencyActive = false;
const BTN_IDS = ['day', 'night', 'sleep', 'emergency'];

/* ── AUDIO ── */
function makeBeep(freq, dur, vol) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);

    osc.start();
    osc.stop(ctx.currentTime + dur);
  } catch (e) {}
}

/* ── CABIN LIGHT ── */
function updateCabinLight(val) {
  val = parseInt(val);

  brightnessVal.textContent = val + '%';
  intensityBadge.textContent = val + '%';
  slider.value = val;

  if (val === 0) {
    cabinLight.style.background = '#050810';
    cabinLight.style.boxShadow = 'none';
    return;
  }

  const a = val / 100;
  const r = 255;
  const g = Math.round(230 + 20 * a);
  const b = Math.round(80 + 80 * a);
  const glow = Math.round(a * 30);

  cabinLight.style.background = `radial-gradient(ellipse at 50% 40%,
    rgba(${r},${g},${b},${(0.15 + a * 0.7).toFixed(2)}),
    rgba(${r},${Math.round(g * 0.7)},${Math.round(b * 0.4)},${(a * 0.3).toFixed(2)}) 60%,
    transparent 90%)`;

  cabinLight.style.boxShadow =
    `0 0 ${glow}px rgba(${r},${g},${b},${(a * 0.4).toFixed(2)})`;
}

/* ── LIGHT CONTROL ── */
function setLight(val) {
  if (emergencyActive) return;
  updateCabinLight(val);
}

slider.addEventListener('input', () =>
  updateCabinLight(slider.value)
);

/* ── ALERT SYSTEM ── */
function setAlert(state, icon, title, sub) {
  document.getElementById('alertBar').className = 'alert-bar ' + state;
  document.getElementById('alertIcon').textContent = icon;

  const titleEl = document.getElementById('alertTitle');
  titleEl.className = 'alert-title ' + state;
  titleEl.textContent = title;

  document.getElementById('alertSub').textContent = sub;
  document.getElementById('alertTs').textContent =
    'Updated: ' + new Date().toLocaleTimeString();
}

/* ── MODE CONTROL ── */
function setMode(mode) {
  emergencyActive = false;

  BTN_IDS.forEach(id => {
    const btn = document.getElementById('btn-' + id);
    btn.className = 'mode-btn' + (id === 'emergency' ? ' emergency' : '');
  });

  const display = document.getElementById('modeDisplay');
  const chip = document.getElementById('modeChip');

  if (mode === 'DAY') {
    display.textContent = 'Day Mode';
    display.className = 'mode-display green';
    chip.textContent = 'Day';
    chip.className = 'chip green';

    document.getElementById('btn-day').className = 'mode-btn active-day';
    setAlert('ok', '✅', 'System Normal', 'All systems operational');
    updateCabinLight(80);
    makeBeep(660, 0.15, 0.1);
  }

  else if (mode === 'NIGHT') {
    display.textContent = 'Night Mode';
    display.className = 'mode-display yellow';
    chip.textContent = 'Night';
    chip.className = 'chip yellow';

    document.getElementById('btn-night').className = 'mode-btn active-night';
    setAlert('warn', '🌙', 'Low Light Active', 'Cabin dimmed for night flight');
    updateCabinLight(35);
    makeBeep(440, 0.2, 0.12);
  }

  else if (mode === 'SLEEP') {
    display.textContent = 'Sleep Mode';
    display.className = 'mode-display yellow';
    chip.textContent = 'Sleep';
    chip.className = 'chip yellow';

    document.getElementById('btn-sleep').className = 'mode-btn active-sleep';
    setAlert('warn', '😴', 'Cabin Rest Mode', 'Minimal lighting enabled');
    updateCabinLight(10);
    makeBeep(330, 0.2, 0.08);
  }

  else if (mode === 'EMERGENCY') {
    emergencyActive = true;

    display.textContent = 'Emergency';
    display.className = 'mode-display red';
    chip.textContent = 'Emergency';
    chip.className = 'chip red';

    document.getElementById('btn-emergency').className =
      'mode-btn emergency active-emergency';

    setAlert('danger', '⚠️', 'Emergency Active',
      'Follow crew instructions immediately');

    makeBeep(880, 0.4, 0.2);
    setTimeout(() => makeBeep(880, 0.4, 0.2), 500);
  }
}

/* ── SENSOR DATA ── */
/* ── SENSOR DATA ── */
socket.on("sensorData", (data) => {
  console.log("RAW:", data);

  if (!data) return;

  data = String(data).trim();

  let light = "0";
  let motion = "0";

  const parts = data.split(",");

  parts.forEach(p => {
    if (p.includes("LIGHT:")) light = p.split(":")[1];
    if (p.includes("MOTION:")) motion = p.split(":")[1];
  });

  document.getElementById("light").innerText = light;

  motion = motion.toString().toUpperCase().trim();

  const motionDetected =
    motion === "1" || motion === "HIGH" || motion === "TRUE" || motion === "ON";

  const motionEl = document.getElementById("motion");
  const lav      = document.getElementById("lavatory");
  const chip     = document.getElementById("sensorChip");

  if (motionDetected) {
    motionEl.innerText = "PASSENGER DETECTED";
    lav.innerText      = "Occupied";
    lav.className      = "sensor-val warn";
    chip.textContent   = "Lavatory In Use";
    chip.className     = "chip yellow";
    lavatoryState      = "OCCUPIED";
  } else {
    motionEl.innerText = "NO ACTIVITY";
    lav.innerText      = "Vacant";
    lav.className      = "sensor-val ok";
    chip.textContent   = "All Clear";
    chip.className     = "chip green";
    lavatoryState      = "VACANT";
  }
});
// SIMULATED SENSOR DATA (for GitHub Pages demo)
setInterval(() => {
  const fakeLight = Math.floor(Math.random() * 100);
  const fakeMotion = Math.random() > 0.5 ? "1" : "0";

  const data = `LIGHT:${fakeLight},MOTION:${fakeMotion}`;

  // manually trigger your existing logic
  const event = { data };

  let light = fakeLight;
  let motion = fakeMotion;

  document.getElementById("light").innerText = light;

  const motionDetected = motion === "1";

  const motionEl = document.getElementById("motion");
  const lav = document.getElementById("lavatory");
  const chip = document.getElementById("sensorChip");

  if (motionDetected) {
    motionEl.innerText = "PASSENGER DETECTED";
    lav.innerText = "Occupied";
    lav.className = "sensor-val warn";
    chip.textContent = "Lavatory In Use";
    chip.className = "chip yellow";
  } else {
    motionEl.innerText = "NO ACTIVITY";
    lav.innerText = "Vacant";
    lav.className = "sensor-val ok";
    chip.textContent = "All Clear";
    chip.className = "chip green";
  }
}, 2000);
