import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';


@Injectable({ providedIn: 'root' })

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(), ...character //Copia todas las caractericas del constructor
    }
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
    //Desde la posicion de index, borra 1 valor
  }

}
