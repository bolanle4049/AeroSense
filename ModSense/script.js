const snoowrap = require('snoowrap');

const reddit = new snoowrap({
  userAgent: 'AeroModApp',
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET'
});
const socket = io(); // keep if using backend, safe even if unused

/* ── STATE ── */
let emergencyActive = false;

/* ── DOM REFERENCES ── */
const slider         = document.getElementById('brightnessSlider');
const cabinLight     = document.getElementById('cabinLight');
const brightnessVal  = document.getElementById('brightnessValue');
const intensityBadge = document.getElementById('intensityBadge');

/* ── ALERT SYSTEM ── */
function setAlert(state, icon, title, sub) {
  const bar = document.getElementById('alertBar');
  const iconEl = document.getElementById('alertIcon');
  const titleEl = document.getElementById('alertTitle');
  const subEl = document.getElementById('alertSub');
  const ts = document.getElementById('alertTs');

  if (!bar) return; // prevents crash if not in HTML

  bar.className = 'alert-bar ' + state;
  iconEl.textContent = icon;

  titleEl.className = 'alert-title ' + state;
  titleEl.textContent = title;

  subEl.textContent = sub;
  ts.textContent = 'Updated: ' + new Date().toLocaleTimeString();
}

/* ── LIGHT SYSTEM (optional visual effect) ── */
function updateCabinLight(val) {
  if (!cabinLight) return;

  val = parseInt(val);
  brightnessVal && (brightnessVal.textContent = val + '%');
  intensityBadge && (intensityBadge.textContent = val + '%');

  if (val === 0) {
    cabinLight.style.background = '#050810';
    cabinLight.style.boxShadow = 'none';
    return;
  }

  const a = val / 100;
  cabinLight.style.background = `rgba(255, 200, 100, ${a})`;
  cabinLight.style.boxShadow = `0 0 ${a * 30}px rgba(255,200,100,0.5)`;
}

/* ── MODE SYSTEM (AEROMOD CORE) ── */
function setMode(mode) {

  const display = document.getElementById('modeDisplay');
  const chip = document.getElementById('modeChip');

  if (mode === 'NORMAL') {
    display && (display.textContent = 'Normal');
    chip && (chip.textContent = 'Normal');

    setAlert('ok', '✅', 'Community Stable', 'No harmful activity detected');
    updateCabinLight(80);
  }

  else if (mode === 'WARNING') {
    display && (display.textContent = 'Warning');
    chip && (chip.textContent = 'Warning');

    setAlert('warn', '⚠️', 'Toxic Activity Rising', 'Monitor flagged posts');
    updateCabinLight(40);
  }

  else if (mode === 'HIGH_RISK') {
    display && (display.textContent = 'High Risk');
    chip && (chip.textContent = 'High Risk');

    setAlert('danger', '🚨', 'High Risk Detected', 'Immediate moderator action required');
    updateCabinLight(100);
  }
}

/* ── COMMUNITY SIMULATION (MAIN LOGIC) ── */
function simulateCommunity() {

  const posts = Math.floor(Math.random() * 20);
  const toxicity = Math.random();
  const flagged = Math.floor(Math.random() * 5);

  const postsEl = document.getElementById("posts");
  const toxEl = document.getElementById("toxicity");
  const flaggedEl = document.getElementById("flagged");

  postsEl && (postsEl.innerText = posts);
  flaggedEl && (flaggedEl.innerText = flagged);

  if (toxicity < 0.3) {
    toxEl && (toxEl.innerText = "Low");
    setMode("NORMAL");
  } 
  else if (toxicity < 0.7) {
    toxEl && (toxEl.innerText = "Medium");
    setMode("WARNING");
  } 
  else {
    toxEl && (toxEl.innerText = "High");
    setMode("HIGH_RISK");
  }
}

/* ── OPTIONAL: SOCKET DATA (if backend used later) ── */
socket.on && socket.on("redditData", (data) => {
  document.getElementById("posts").innerText = data.posts;

  if (data.risk < 5) setMode("NORMAL");
  else if (data.risk < 10) setMode("WARNING");
  else setMode("HIGH_RISK");
});

/* ── START SYSTEM ── */
setInterval(simulateCommunity, 3000);
updateCabinLight(80);