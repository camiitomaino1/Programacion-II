//ejercicio 1
/*lert("Hello world");
//ejercicio 2
document.write("Hello World</br>");
//ejercicio 3
document.write("El resltado de la suma es: ", 3 + 5);
//ejercicio 4
let nombreUsuario = prompt("Ingrese su nombre de usuario", "");
document.write("Hola " + nombreUsuario);
//ejercicio 5
let num1 = Number(prompt("Ingrese el 1er npumero", ""));
let num2 = Number(prompt("Ingrese el 2do numero", ""));
document.write("El resultado de la suma es: ", num1 + num2);

//Ejercicio 6
var n1 = Number(prompt("Ingrese el primer numero"));
var n2 = Number(prompt("Ingrese el segundo numero"));

if(n1 > n2) {
    alert("El numero mas grande es " + n1);
} else {
    alert("El numero mas grande es " + n2);
}

//Ejercicio 7
var n1 = Number(prompt("Ingrese el primer numero"));
var n2 = Number(prompt("Ingrese el segundo numero"));
var n3 = Number(prompt("Ingrese el 3er numero"));

if(n1 > n2 && n1 > n3) {
    document.write("El numero mas grande es el " + n1);
} else if(n2 > n1 && n2 > n3){
    document.write("El numero mas grande es el " + n2);
} else {
    document.write("El numero mas grande es el " + n3)
}

//Ejercicio 8
var num = Number(prompt("Ingrese un numero"));

if(num % 2 == 0) {
    document.write("Si es divisible por 2");
} else {
    DocumentTimeline.write("No es divisible or 2");
}

//Ejercicio 9
var frase = String(prompt("Ingrese una frase"));

let contador = 0;

for(let i = 0; i < frase.length; i++) {
    if(frase[i] === "a" || frase[i] === "A") {
        contador++
    }
}

document.write(`La letra "a" aparece ${contador} veces en la frase.`);

//Ejercicio 10 

var frase

//Ejercicio 13
var n = Number(prompt("Ingrese un nmero"));

if(n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0) {
    document.write(`El numero $(n) es divisible por uno o mas de estos numeros`);
} else {
    document.write("No es divisble por ninguno")
}

//Ejercicio 15
var num = Number(prompt("ingrese un numero"));

for(let i = 0; i < num; i++) {
    if(num % i === 0) {
        document.write(i + "</br>");
    }
}

//Ejercicio 16
var numero1 = Number(prompt("Ingrese un numero"));
var numero2 = Number(prompt("Ingrese otro numero"));

var menor = numero1 < numero2 ? numero1 : numero2;

document.write(`Los divisores comunes de ${numero1} y ${numero2} son: </br>`);

for(let i = 1; i <= menor; i++) {
    if (numero1 % i === 0 && numero2 % i === 0) {
        document.write(i + "</br>");
    }
}

//Ejercocop 17

var num = Number(prompt("Ingrese un numero"));

var esPrimo = true;

if(num <= 1) {
    esPrimo = false;
} 

for(let i = 2; i < num; i++) {
    if(num % i === 0) {
        esPrimo = false;
        break;
    }
}

if(esPrimo) {
    document.write(num + " es primo");
} else {
    document.write(num + " no es primo");
}

//Ejercocop 18

var edad = Number(prompt("Ingree su edad"));

var puedeConducir = true;

if(edad < 18) {
    puedeConducir = false;
}

if(puedeConducir) {
    document.write("Usted pude conducir");
} else {
    document.write("Usted no puede conducir");
}*/

//Ejercicio 19
var nota = Number(prompt("ngrese una nota"))

switch(nota) {
    case 0: 
    case 1: 
    case 2:
    case 3: 
        document.write("Muy deficiente");
        break;

    case 4:
    case 5:
        document.write("Insuficiente");
        break;

    case 6:
        document.write("Suficiente");
        break;

    case 7:
        document.write("Bien");
        break;

    case 8:
    case 9:
        document.write("Notable");
        break;

    case 10:
        document.write("Sobresaliente");
        break;

    default:
        document.write("Nota Invalida");
}