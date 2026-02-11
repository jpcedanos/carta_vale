function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");
  mensaje.style.display = "block";
  mensaje.style.opacity = 0;
  mensaje.style.transition = "opacity 1s";
  
  setTimeout(() => {
    mensaje.style.opacity = 1;
  }, 100);
}
