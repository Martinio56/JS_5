//Oppgave 1--------------------------------------------------------------------------------------------------------------------------

// function tall (a, b, c) {
//     return a + b + c;
// }

// console.log (tall (1, 2, 3));

//Oppgave 2--------------------------------------------------------------------------------------------------------------------------

// const a = Number(window.prompt('Skriv et tall'))
// const b = Number(window.prompt('Skriv et tall'))
// const c = Number(window.prompt('Skriv et tall'))

// function tall () {
//     return a + b + c;
// }

// console.log (tall ());

//Oppgave 3--------------------------------------------------------------------------------------------------------------------------

// function Tall() {
//     const tall1 = Math.round(Math.random() * 10);
//     const tall2 = Math.round(Math.random() * 10);
   
//     if (tall1 > tall2) {
//       return tall1 + " er større enn " + tall2;
//     } else if (tall1 < tall2) {
//       return tall1 + " er mindre enn " + tall2;
//     } else {
//       return tall1 + " er lik " + tall2;
//     }
//   }
  
//   console.log(Tall());

//Oppgave 4--------------------------------------------------------------------------------------------------------------------------

// function addisjon(tall1, tall2) {
//     return tall1 + tall2;
//   }
  
//   function subtraksjon(tall1, tall2) {
//     return tall1 - tall2;
//   }
  
//   function multiplikasjon(tall1, tall2) {
//     return tall1 * tall2;
//   }
  
//   function divisjon(tall1, tall2) {
//     return tall1 / tall2;
//   }
  
//   let tall1 = Number(window.prompt("Skriv inn det første tallet"));
//   let tall2 = Number(window.prompt("Skriv inn det andre tallet"));
//   let operator = prompt("Skriv inn +, -, * eller /");
  
//   switch (operator) {
//     case "+":
//       console.log(tall1 + " + " + tall2 + " = " + addisjon(tall1, tall2));
//       break;
//     case "-":
//       console.log(tall1 + " - " + tall2 + " = " + subtraksjon(tall1, tall2));
//       break;
//     case "*":
//       console.log(tall1 + " * " + tall2 + " = " + multiplikasjon(tall1, tall2));
//       break;
//     case "/":
//       console.log(tall1 + " / " + tall2 + " = " + divisjon(tall1, tall2));
//       break;
//     default:
//       console.log("Ugyldig operatør");
//   }
  
//Oppgave 5--------------------------------------------------------------------------------------------------------------------------

// function tilfeldigTall(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   let minTall = Number(window.prompt("Skriv inn det minste tallet"));
//   let maxTall = Number(window.prompt("Skriv inn det største tallet"));
  
//   let resultat = tilfeldigTall(minTall, maxTall);
//   console.log("Det tilfeldige tallet mellom " + minTall + " og " + maxTall + " er " + resultat);
  
//-----------------------------------------------------------------------------------------------------------------------------------