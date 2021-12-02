let jugadorGlobal;
var puntos = 0;

/* pantallas */
let PantallaInicio = document.getElementById("PantallaInicio");
let PantallaCategorias = document.getElementById("PantallaCategorias");
let PreguntasGeo = document.getElementById("PreguntasGeo");
let PreguntasMus = document.getElementById("PreguntasMus");
/*------------------------------------------ */

/* Tarjetas------------------------------- */
let tarjetaGeografia = document.getElementById("tarjetaGeografia");
let tarjetaMusica = document.getElementById("tarjetaMusica");
/*---------------------------------- */

/* botones reinicio */
let reiniciarM = document.getElementById("reiniciarM");
let reiniciarG = document.getElementById("reiniciarG");

let nombreJugador = document.getElementById("NombreJugador");
let botonJugar = document.getElementById("botonJugar");
botonJugar.addEventListener("click", () => {
  jugadorGlobal = nombreJugador.value;
  PantallaInicio.style.display = "none";
  document.getElementById("saludoNombre").innerHTML =
    "¡Hola " + jugadorGlobal + "!";
  PantallaCategorias.style.display = "block";
});

tarjetaGeografia.addEventListener("click", () => {
  PantallaCategorias.style.display = "none";
  PreguntasGeo.style.display = "block";
});
tarjetaMusica.addEventListener("click", () => {
  PantallaCategorias.style.display = "none";
  PreguntasMus.style.display = "block";
});

/* Formularios----------------------------- */
let formularioGeo = document.getElementById("formularioGeo");
formularioGeo.addEventListener("submit", (e) => {
  e.preventDefault();
  let resp1 = document.getElementById("dublin");
  let resp2 = document.getElementById("sahara");
  let resp3 = document.getElementById("primerMeridiano");
  puntos = 0;

  if (resp1.checked) {
    puntos += 100;
  }
  if (resp2.checked) {
    puntos += 100;
  }
  if (resp3.checked) {
    puntos += 100;
  }
  let puntaje = document.getElementById("puntaje");
  puntaje.innerHTML = puntos + " Puntos";
  reiniciarG.style.display = "block";
});
let formularioMus = document.getElementById("formularioMus");
formularioMus.addEventListener("submit", (e) => {
  e.preventDefault();
  let resp1 = document.getElementById("CyndiLauper");
  let resp2 = document.getElementById("michaelJackson");
  let resp3 = document.getElementById("2021");
  puntos = 0;
  if (resp1.checked) {
    puntos += 100;
  }
  if (resp2.checked) {
    puntos += 100;
  }
  if (resp3.checked) {
    puntos += 100;
  }
  let puntaje = document.getElementById("puntajee");
  puntaje.innerHTML = puntos + " Puntos";
  reiniciarM.style.display = "block";
});
/* botones reinicio */

let botonesReinicio = document.getElementsByClassName("botonesReiniciar");
botonesReinicio[0].addEventListener("click", () => {
  puntos = 0;
  PreguntasGeo.style.display = "none";
  PantallaInicio.style.display = "block";
  puntaje.innerHTML = " ";
});
botonesReinicio[1].addEventListener("click", () => {
  puntos = 0;
  PreguntasMus.style.display = "none";
  PantallaInicio.style.display = "block";
  puntajee.innerHTML = " ";
});
