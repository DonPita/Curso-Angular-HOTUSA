/*Le decimos que solo queremos strings dentro del array, para que no coja
otros tipos de valores*/
let skills: string[] = ['Bash', 'Counter', 'Healing'];

/*Interface, para declarar el tipo de las variables que van a pertenecer
al objeto siguiente, puesto que dentro del objeto no se puede especificar
con los ":" */
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

/*Objeto, se le declara el tipo de la interfaz, para que los atributos
sean del tipo requerido por la interfaz y no admita otros*/
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

strider.hometown = 'Rivendell';


console.table(strider);


export{};