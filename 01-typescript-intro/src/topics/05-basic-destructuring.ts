
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Costa del Silencio",
    details: {
        author: 'Mago de Oz',
        year: 2007
    }
}

//Destructuracion, lo comentado es otra opcion
const { song: anotherSong,
    songDuration: duration,
    details
    // details: {author}
} = audioPlayer;

const { author } = details; //La opcion comentada en la linea 28, significa borrar el siguiente

/* Sin destructurar
console.log('Song: ', audioPlayer.song);
console.log('Duration: ', audioPlayer.songDuration);
console.log('Author : ', audioPlayer.details.author);*/

//Desestructurado
console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author : ', author);

//Destructuración Arrays
const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta'/*, 'Trunks'*/];


console.log('Personaje 3: ', trunks);


export { };