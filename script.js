function goReflection() {
  window.location.href = "reflection.html";
}

function goRoutine() {
  window.location.href = "routine.html";
}

function saveReflection() {
  const text = document.getElementById("reflection").value;
  localStorage.setItem("reflection", text);
  localStorage.setItem("reflectionDone", "yes");
  window.location.href = "home.html";
}

function saveRoutine() {
  const text = document.getElementById("routine").value;
  localStorage.setItem("routine", text);
  localStorage.setItem("routineDone", "yes");
  window.location.href = "home.html";
}
