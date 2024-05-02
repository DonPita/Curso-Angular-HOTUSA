
function addNumbers(a: number, b: number) {
    return a + b;
};

//Ejemplo de tipado de datos, retorno distinto a entrada
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

//Funcion con elemento obligario, elemento opcional y elemento opcional con valor asignado
function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

/*const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(1, 2);
const multiplyResult: number = multiply(5);


//Al usar llaves en el log, se imprime como un objeto
console.log({ result, result2, multiplyResult });*/

//Interfaz para el personaje
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

//metodo para curar personaje
const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;
}

//Creación personaje
const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 10);

strider.showHp();




export { }