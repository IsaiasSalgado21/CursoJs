import saludar,{Saludar,PI,usuario}from"./constantes.js";
import{aritmetica as calculos}from"./aritmetica.js";

console.log("Archivo modulosImpExp.js");

console.log(PI, usuario);
//console.log(aritmetica.sumar(2,4));
console.log(calculos.sumar(3,4));
console.log(calculos.restar(3,4));
saludar();
let saludo = new Saludar();
saludo;