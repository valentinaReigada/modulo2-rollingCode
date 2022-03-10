let nombre = "valor";
const nombreConst = "valor";

//arreglo
let arreglo = ["valor", 2, true, null, {}]; /*cualquier tipo de dato*/

//objeto
let persona = { nombre: "valentina", edad: 21 };

//operaciones aritmetica
let suma = 15 + 15;
let multiplicacion = 2 * 5;

//me muestra lo que pongo dentro de los parentesis

console.log(persona);
console.log("resultado de la suma" + suma);

//operadores unitarios
let num1 = 1;
num1++;
console.log('resultado de la suma' + num1);


//operadores relacionales (devuelve true o false)
let primerNumero = 10;
let segundoNumero = 15;
let tercerNumero = 20;
let cuartoNumero = 25;


console.log(primerNumero == segundoNumero);
console.log(primerNumero === segundoNumero); /*estrictamente igual(se fija el tipo de dato)*/
console.log(primerNumero < segundoNumero);
console.log(primerNumero != cuartoNumero); /*se fija si es diferente */

let verdadero = true;
let falso = false;
console.log('negacion de verdadero: ' + !verdadero);
console.log('negacion de falso: ' + !falso);

//parecido al alert
let edad = prompt("Ingrese su edad");  
alert("su edad es: " + edad); 