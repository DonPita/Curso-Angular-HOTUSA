import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() { }


  public get tagsHistory(): string[] {
    return [...this._tagsHistory]; //Duplicado, asi no se referencia.
  }

  public searchTag( tag: string): void {
    this._tagsHistory.unshift(tag);
  }


}
