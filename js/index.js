document.addEventListener("DOMContentLoaded", function () {
  let puntaje = 0;
  let intentos = 0;

  const cantIntentos = document.querySelector(".puntaje");
  const intentosSalida = document.querySelector(".intentos");
  const MensajeSalida = document.querySelector(".mensaje");

  const botones = document.querySelectorAll(".btn button");


  const seleccionarOpcion = (event) => {
    intentos++;
    intentosSalida.textContent = ` ${intentos}`;

    if (event.target.classList.contains("correcto")) {
      
      document.querySelector(".imagen img").style="1px solid yellow"
      MensajeSalida.style.backgroundColor="blue"
      MensajeSalida.style.fontFamily = "'Times New Roman', Times, serif";
      MensajeSalida.style.color="white"
      

      switch (intentos) {
        case 1:
          puntaje += 5;
          break;
        case 2:
          puntaje += 3;
          break;
        case 3:
          puntaje += 1;
          break;
        default:
          break;
      }
      cantIntentos.textContent = ` ${puntaje}`;
      MensajeSalida.innerHTML =
        "Felicitaciones, has seleccionado la opción correcta";
      event.target.disabled = true;
      
    }

    if (event.target.classList.contains("incorrecto")) {
      MensajeSalida.innerHTML = "Pokémon incorrecto, intentalo nuevamente ";
      MensajeSalida.style.backgroundColor = "red";
      MensajeSalida.style.border = "none";


    
    }

    if (intentos === 3 && !event.target.classList.contains("correcto")) {
      reiniciarJuego();
      
      
    }
  };

  const reiniciarJuego = () => {
    intentos = 0;
    puntaje = 0;
    cantIntentos.textContent = `${puntaje}`;
    intentosSalida.textContent = `${intentos}`;
    MensajeSalida.textContent = "";
    MensajeSalida.style.border = "none";

    for (let boton of botones) {
      boton.disabled = false;
    }
  };

  for (let boton of botones) {
    boton.addEventListener("click", seleccionarOpcion);
  }

  document
    .querySelector(".reiniciar")
    .addEventListener("click", reiniciarJuego);
});

const imagen = () => {};
