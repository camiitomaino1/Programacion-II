/*//Ejercicio 1
function repetirMensaje(numero) {
    for(let i = 0; i < numero; i++){
        console.log("Bienvenidos al curso Full Stack\n");
    }
}

//Ejercicio 2
function maximo(num1, num2){
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
document.write(maximo(3, 4))

//Ejercicio 3
function promedio3(num1, num2, num3){
    let promedio = (num1 + num2 + num3) / 3;
    return promedio;
}
document.write(promedio3(8, 8, 9));

//Ejercicio 4
function promedioNotas() {
    let suma = 0;
    let i = 0;
    let nota;

    do {
        nota = parseFloat(prompt("Ingrese una nota mayor que -1"));

        if(suma !== -1){
            suma+= nota;
            i++;
        }
    } while(nota !== -1);

    if(i > 0) {
        let promedio = suma / i;
        return promedio;
    } else {
        return "No se ha ingresado ninguna nota";
    }
}

document.write(promedioNotas());

//Ejercicio 5
function siguiente(num) {
    return num + 1;
}
//document.write(siguiente(3));

//Ejercico 6
function doble(num) {
    return num * 2;
}
//document.write(doble(6));

//Ejercicio 7
function cuadrado(num){
    return num ** 2;
}
//document.write(cuadrado(4));*/

//Ejercicio 8
/*function imprimirValores(num) {
    let sig = siguiente(num);
    let double = doble(num);
    let alCuadrado = cuadrado(num);

    document.write("Número ingresado: " + num + "<br>");
    document.write("Siguiente: " + sig + "<br>");
    document.write("Doble: " + double + "<br>");
    document.write("Cuadrado: " + alCuadrado + "<br>");
}
imprimirValores(4);

//Ejecicio 9
function imprimirElDobleDelSiguiente(num){
    let double = doble(num);
    let sig = siguiente(double);
    document.write("El siguiente del doble de " + num + " es: " + sig + "<br>");
}
imprimirElDobleDelSiguiente(5);*/

//Ejercicio 10
/*function imprimirElDobleDelSiguienteAlCuadrado(num) {
    let sig = siguiente(num);
    let alCuadrado = cuadrado(sig);
    let double = doble(alCuadrado);
    document.write("El doble del siguiente al cuadrado de " + num + "es: " + double + "</br>");
}
imprimirElDobleDelSiguienteAlCuadrado(3);

//Ejercicio 11
function perimetroCuadrado(lado) {
    return lado * 4;
}
document.write(perimetroCuadrado(2));

//Ejercicio 12
function areaCudrado(lado){
    return lado ** 2;
}
document.write(areaCudrado(3));

//Ejercicio 13
function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio;
}
document.write(calcularCircunferencia(2));

//Ejercicio 14
function areaCirculo(radio) {
    return Math.PI * radio ** 2;
}
document.write(areaCirculo(3));

//Ejercicio 15
function diasMes(){
    let numMes = Number(prompt("Ingrese un numero de mes"));
    switch(numMes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
         break;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        break;
        case 2:
            return 28;
        break;
        default:
            return "Mes inexistente";
    }
}
document.write(diasMes());
    
//Ejercicio 16
function esBisiesto(anio){
    if((anio % 4 === 0 && anio % 100 !==0) || (anio % 400 === 9)){
        return true;
    } else {
        return false;
    }
}

let anio = Number(prompt("Ingrese un año"));

if(esBisiesto(anio)){
    document.write("Este año es bisiesto");
} else {
    document.write("Este año no es bisiesto");
}*/

//Ejercicio 17
function diasDelMes(mes, anio) {
    return new Date(anio, mes, 0).getDate();
}
let mes = Number(prompt("ingrese el numero de un mes"));
let anio = Number(prompt("Ingrese un año"));

document.write(diasDelMes(mes, anio));