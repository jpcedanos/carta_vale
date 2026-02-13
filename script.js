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

function abrirCarta() {
  const sobre = document.querySelector(".sobre");
  const sonido = document.getElementById("papelSound");

  sobre.classList.toggle("abierto");

  if (sonido) {
    sonido.currentTime = 0;
    sonido.play();
  }
}


