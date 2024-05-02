
//Genericos, la T indica que es genérico
export function whatsMyType<T>(argument: T): T {
    return argument;
}

//Se le puede añadir algo mas especifico al genérico para que sea del tipo que queramos
let amIString = whatsMyType<string>('Hola Mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));


