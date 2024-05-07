import { createInjectableType } from '@angular/compiler';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //Solo con el constructor ya lo puedes usar en el html
  constructor(private dbzService: DbzService) {

  }

  get characters(): Character[] {
    //return this.dbzService.characters; Modo normal
    /*De la siguiente manera hacemos una copia del Array original por si no
    queremos que este sea modificado*/
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string):void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

}
