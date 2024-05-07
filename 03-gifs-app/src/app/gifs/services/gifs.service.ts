import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = 'qMFuw6b7rv3fZibtxPYHFNBNdbXIiBhF';

  constructor() { }


  public get tagsHistory(): string[] {
    return [...this._tagsHistory]; //Duplicado, asi no se referencia.
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    /*Si la entrada es de 0 caracteres no hace nada, y si ya existe la busqueda en el
    historial no la duplica y la mete de primera*/
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    } else if (tag.length === 0) { return };

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
  }

  public searchTag(tag: string): void {

    this.organizeHistory(tag);
  }


}
