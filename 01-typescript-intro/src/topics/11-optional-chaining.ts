

export interface Passenger {
    name: string;
    children?: string[]; //Opcional porque puede viajar solo el/la fulana/o
}

const passenger1: Passenger = {
    name: 'Pita',
}

const passenger2: Passenger = {
    name: 'Paco',
    children: ['Natalia', 'Sofia'],
}

const printChildren = ( passenger: Passenger) => {
    /*Asi evitamos ifs y condicionales. Si hay children te tira el length, si no 
    te tira el 0, y todo en la declaración de la constante*/
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
}

printChildren(passenger2);
printChildren(passenger1);
