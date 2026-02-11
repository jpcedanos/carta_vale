window.onload = () => {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("menu").style.display = "block";
  }, 2500);
};


function irA(id) {
  document.getElementById("menu").style.display = "none";

  const pantallas = document.querySelectorAll(".pantalla");
  pantallas.forEach(p => p.style.display = "none");

  document.getElementById(id).style.display = "block";
}

function volver() {
  const pantallas = document.querySelectorAll(".pantalla");
  pantallas.forEach(p => p.style.display = "none");

  document.getElementById("menu").style.display = "block";
}
