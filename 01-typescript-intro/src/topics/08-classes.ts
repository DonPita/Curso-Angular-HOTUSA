
export class Person {

    /*public name: string;
    private address: string;*/

    /*constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }*/
    //Asi tambien se pueden declarar objetos, dentro de los argumentos del constructor
    constructor (
        public firstname: string,
        public lastname: string,
        private address: string = 'No Address'
    ) {}
}

//Herencia pura y dura
/*export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        name: string,
        address: string
    ) {
        super(name, address);
    }

}*/

//Composición, esto sirve para reutilizar objetos de la clase Person en este caso.
export class Hero {

    //public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        //this.person = new Person(realName);
    }

}

const tony = new Person('Tony', 'Stark', 'New York'); //Se recicla abajo
const ironman = new Hero('IronMan', 45, 'Tony', tony);

/*Da error, porque es privado, no deberia funcionar, pero funciona.
console.log(ironman.address);*/

console.log(ironman);