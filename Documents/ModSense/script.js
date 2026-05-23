function setStatus(mode) {
  const status = document.getElementById("status");
  const alert = document.getElementById("alert");

  if (mode === "NORMAL") {
    status.innerText = "NORMAL";
    status.className = "status green";
    alert.innerText = "Community Stable";
  }

  if (mode === "WARNING") {
    status.innerText = "WARNING";
    status.className = "status yellow";
    alert.innerText = "Toxic activity increasing";
  }

  if (mode === "HIGH") {
    status.innerText = "HIGH RISK";
    status.className = "status red";
    alert.innerText = "Immediate moderation required!";
  }
}

function simulate() {
  const posts = Math.floor(Math.random() * 20);
  const toxicity = Math.random();
  const flagged = Math.floor(Math.random() * 5);

  document.getElementById("posts").innerText = posts;
  document.getElementById("flagged").innerText = flagged;

  if (toxicity < 0.3) {
    document.getElementById("toxicity").innerText = "Low";
    setStatus("NORMAL");
  } else if (toxicity < 0.7) {
    document.getElementById("toxicity").innerText = "Medium";
    setStatus("WARNING");
  } else {
    document.getElementById("toxicity").innerText = "High";
    setStatus("HIGH");
  }
}

setInterval(simulate, 3000);