
export class Person {

    public name: string;
    private address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
    /*Asi tambien se pueden declarar objetos, dentro de los argumentos del constructor
    constructor (
        public name: string,
        private address: string = 'No Address'
    ) {}*/
}

//Herencia pura y dura
export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        super(realName, 'New York');
    }

}

const ironman = new Hero('IronMan', 45, 'Tony');

/*Da error, porque es privado, no deberia funcionar, pero funciona.
console.log(ironman.address);*/

console.log(ironman);