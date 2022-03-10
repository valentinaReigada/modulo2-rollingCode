//Tarea
// Creamos tres variables: numero1, numero2, resultado
// mostramos por consola (console.log();) los resultados de las operaciones
// Sumamos dos números
// Restamos dos números
// multiplicamos dos números
// Dividimos dos numeros
// comparamos si el numero 1 es mayor o igual que numero 2
// comparamos si numero 1 es distinto de numero 2
// Intentar usar prompt
//Parecido al alert()


let resultado = 0;

alert("¿Arrancamos la operaciones aritmeticas de números?");
let numero1 = parseInt(prompt("Ingrese un número"));
let numero2 = parseInt(prompt("Ingrese un segundo número"));

console.log("Primer número ingresado: " + numero1+ ", " + "Segundo número ingresado: " + numero2);

//operaciones
console.log("Resultado de operaciones aritmeticas");

//suma
resultado = numero1 + numero2;
console.log("El resultado de la suma es: " +  resultado );

// Restamos dos números
resultado = numero1 - numero2;
console.log("El resultado de la resta es: "+ resultado);

// multiplicamos dos números
resultado = numero1 * numero2;
console.log("El resultado de la multiplicación es: "+ resultado);


// Dividimos dos numeros
resultado = numero1 / numero2;
console.log("El resultado de la división es: "+ resultado);


alert("¿Arrancamos la operaciones condicionales de los  números dados?");


alert("¿Quiere comparar si el primer número es mayor, igual o diferente al segundo número?");

console.log("Resultado de operaciones condicionales");

resultado = numero1 >= numero2
console.log("¿El primer número es mayor o igual al segundo numero ingresado? " + resultado);
resultado = numero1 != numero2
console.log("¿El primer numero es distinto al segundo numero ingresado? " + resultado);

