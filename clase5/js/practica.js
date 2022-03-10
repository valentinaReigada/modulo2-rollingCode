// let presentacion = "Hola mi nombre es franco";
// console.log(presentacion);

// presentacion = presentacion + ", un gusto.";
// console.log(presentacion);

// console.log(presentacion + "--> asasasassa")



let presentacion = "Hola mi nombre es Franco, un gusto.";
console.log(presentacion.length); //para tener el tamaño del string

// mayusculas
console.log(presentacion.toUpperCase());
console.log(presentacion.toLowerCase()) ; //minuscula

let nombre = "Franco"
let apellido = "Casas"

console.log(apellido.length);

// template string
console.log(nombre + " " + apellido);
//poner variables dentro de un string, com ` ${variable} `
console.log(`${nombre} ${apellido}`); 

let nombreProd = "CocaCola"
let precioProd = 15;
let unidadesDispo = 1;

console.log(`${nombreProd} $${precioProd} Disponible:${unidadesDispo}`);

// obtener ultimo caracter de un string 
console.log(apellido.charAt(apellido.length - 1));

let num = 5;
num--; //le resta uno
console.log(num);