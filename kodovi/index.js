//1. zad
/*for (let i = 1; i <= 10; i++) {
  console.log(i);
}*/

//2. zad
/*let sum = 0;
let n = Number(prompt("Ohajo"));
for (let i = 0; i <= n; i++) {
  sum += i;
}
console.log(sum);*/

//3. zad
/*let ocjene = [4, 5, 3, 4, 2];
let zbroj = 0;

for (let i = 0; i < ocjene.length; i++) {
  zbroj += ocjene[i];
}

let prosjek = zbroj / ocjene.length;

console.log("Prosjek ocjena je: " + prosjek);
*/

//4. zad
/*let N = Number(prompt("Unesi broj N:"));

for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) {
    console.log(i + " je paran");
  } else {
    console.log(i + " je neparan");
  }
}
*/

//5. zad
/*let brojevi = [12, 7, 25, 4, 19];

let najveci = brojevi[0];

for (let i = 1; i < brojevi.length; i++) {
  if (brojevi[i] > najveci) {
    najveci = brojevi[i];
  }
}

console.log("Najveći broj je:", najveci);
*/

//6. zad
/*let brojevi = [12, 7, 25, 4, 19];

let unos = Number(prompt("Unesi broj koji želiš pronaći:"));

let pronaden = false;

for (let i = 0; i < brojevi.length; i++) {
    if (brojevi[i] === unos) {
        pronaden = true;
        break;
    }
}

if (pronaden) {
    console.log("Broj je pronađen u polju.");
} else {
    console.log("Broj nije pronađen u polju.");
}*/

//7. zad

/*function jePrijestupna(godina) {
    if (godina % 400 === 0 || (godina % 4 === 0 && godina % 100 !== 0)) {
        return true;
    } else {
        return false;
    }
}

let godina = Number(prompt("Unesi godinu:"));

if (jePrijestupna(godina)) {
    console.log("Godina " + godina + " je prijestupna.");
} else {
    console.log("Godina " + godina + " nije prijestupna.");
}*/

//8.zad

/*
let tekst = prompt("Unesi neki tekst:");
tekst = tekst.toLowerCase();

let samoglasnici = ["a", "e", "i", "o", "u"];
let brojac = 0;

for (let i = 0; i < tekst.length; i++) {
    if (samoglasnici.includes(tekst[i])) {
        brojac++;
    }
}

console.log("Broj samoglasnika u tekstu je: " + brojac);
*/

//9.zad

function zbroji(a, b) {
  return a + b;
}

function oduzmi(a, b) {
  return a - b;
}

function pomnozi(a, b) {
  return a * b;
}

function podijeli(a, b) {
  if (b === 0) {
    return "Dijeljenje s nulom nije dozvoljeno!";
  }
  return a / b;
}

let broj1 = Number(prompt("Unesi prvi broj:"));
let broj2 = Number(prompt("Unesi drugi broj:"));

console.log("Zbroj: " + zbroji(broj1, broj2));
console.log("Razlika: " + oduzmi(broj1, broj2));
console.log("Umnožak: " + pomnozi(broj1, broj2));
console.log("Količnik: " + podijeli(broj1, broj2));
