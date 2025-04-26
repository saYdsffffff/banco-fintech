// Función para iniciar sesión
function login() {
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;
  
    if (usuario === "admin" && clave === "1234") {
      // Redirige a la página de saldo
      window.location.href = "home.html";
    } else {
      alert("Usuario o clave incorrectos");
    }
  }
  
  // Función para registrarse
  function register() {
    alert("Funcionalidad de registro próximamente disponible.");
    // Aquí más adelante podrías abrir otra página o mostrar un formulario de registro
    // window.location.href = "registro.html";
  }
  