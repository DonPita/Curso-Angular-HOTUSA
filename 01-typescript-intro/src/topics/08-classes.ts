
export class Person {

    public name: string;
    private address: string;

    constructor() {
        this.name = 'Fernando';
        this.address = 'Lugo';
    }


}

const ironman = new Person();

/*Da error, porque es privado, no deberia funcionar, pero funciona.
console.log(ironman.address);*/

console.log(ironman);