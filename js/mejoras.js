// Definir variables
let personaje= prompt("Ingrese el nombre de su personaje");
let fuerza= 10;
let defensa= 20;
let velocidad= 30;
let monedas= 50;
let continuarComprando= true;

//información inicial del personaje
console.log ("El nombre de su personaje es " + personaje);
console.log (personaje + " tiene una fuerza de " + fuerza + ", una defensa de " + defensa + " y una velocidad de " + velocidad);
console.log ("Dispones de " + monedas + " monedas para comprarle mejoras a tu personaje.");

//definir condicional y bucles
while (monedas>=5 && continuarComprando){

  let quieroMejora= prompt ("¿Quieres comprarle alguna mejora a tu personaje? (s/n)");

  if (quieroMejora === "s"){
    let tipoMejora = prompt("¿Qué mejora quieres comprar? (fuerza, defensa, velocidad)");

    switch(tipoMejora) {
      case "fuerza":
        fuerza += 15;
        monedas -= 15;
        console.log(personaje + " ahora tiene una fuerza de " + fuerza);
        console.log ("Dispones de " + monedas + " monedas");
        break;
      case "defensa":
        defensa += 5;
        monedas -= 5;
        console.log(personaje + " ahora tiene una defensa de " + defensa);
        console.log ("Dispones de " + monedas + " monedas");
        break;
      case "velocidad":
        velocidad += 10;
        monedas -= 10;
        console.log(personaje + " ahora tiene una velocidad de " + velocidad);
        console.log ("Dispones de " + monedas + " monedas");
        break;
      default:
        console.log("La mejora ingresada es inválida.");
    }
  }
  else if (quieroMejora === "n"){
    continuarComprando = false; 
    alert ("Ok, hoy no habrá más mejoras para tu personaje.");
  } 
  else {
    continuarComprando = false; 
    console.log ("La respuesta ingresada es inválida. Refresca la página para volver a empezar.")
  }
};
