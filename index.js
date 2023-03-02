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
  
//Oppgave 6--------------------------------------------------------------------------------------------------------------------------

// function sorterTall(t1, t2, t3, t4, t5) {
//   const tall = [t1, t2, t3, t4, t5];

//   tall.sort((a, b) => a - b);

//   return tall;
// }

// const tall1 = Number(prompt("Skriv inn tall 1:"));
// const tall2 = Number(prompt("Skriv inn tall 2:"));
// const tall3 = Number(prompt("Skriv inn tall 3:"));
// const tall4 = Number(prompt("Skriv inn tall 4:"));
// const tall5 = Number(prompt("Skriv inn tall 5:"));

// const sorterteTall = sorterTall(tall1, tall2, tall3, tall4, tall5);

// console.log("Sorterte tall fra minst til størst: ", sorterteTall);

//Oppgave 7--------------------------------------------------------------------------------------------------------------------------

// const boksDiv = document.createElement("div");
// boksDiv.setAttribute("id", "boks");

// document.body.appendChild(boksDiv);

// for (let i = 1; i <= 9; i++) {
  
//   const tekstboks = document.createElement("div");
  
//   const tekst = document.createElement("p");
  
//   tekst.innerHTML = "Røyken VGS";
  
//   tekstboks.appendChild(tekst);
  
//   boksDiv.appendChild(tekstboks);
  
//   tekstboks.style.border = "1px solid black";
//   tekstboks.style.padding = "6px";
//   tekstboks.style.textAlign = "center";
//   tekstboks.style.width = "80px";
//   tekstboks.style.height = "15px";
//   tekstboks.style.fontSize = "14px";
//   tekstboks.style.lineHeight = "1em";

//   tekst.style.margin = "0";
//   tekst.style.padding = "0";
//   tekst.style.fontSize = "inherit";
//   tekst.style.lineHeight = "inherit";
// }

// boksDiv.style.display = "grid";
// boksDiv.style.gridTemplateColumns = "repeat(3, 1fr)";
// boksDiv.style.gridTemplateRows = "repeat(3, 1fr)";
// boksDiv.style.gap = "3px";
// boksDiv.style.border = "1px solid black";
// boksDiv.style.margin = "20px";
// boksDiv.style.width = "290px";
// boksDiv.style.padding = "3px";

//Oppgave 8--------------------------------------------------------------------------------------------------------------------------

// function findMax() {
//   const num1 = Number(prompt("Skriv inn tall 1:"));
//   const num2 = Number(prompt("Skriv inn tall 2:"));
//   const num3 = Number(prompt("Skriv inn tall 3:"));

//   let max = num1;
//   if (num2 > max) {
//     max = num2;
//   }
//   if (num3 > max) {
//     max = num3;
//   }

//   return max;
// }

// const maxNum = findMax();
// console.log("Det største tallet er " + maxNum);

//Oppgave 9--------------------------------------------------------------------------------------------------------------------------

// while (true) {
//     var n = Number(window.prompt("Skriv e tall"))
//     if (n == 1) {
//         console.log("Prosessen er stoppet");
//         break;
//     } else if (n%2 == 0) {
//         console.log("While Loop fortsetter. Resultat er: " + n/2);
//     } else if (n%2 != 0){
//         console.log("While Loop fortsetter. Resultat er: " + (3*n+1));
//     }
// }

//-----------------------------------------------------------------------------------------------------------------------------------