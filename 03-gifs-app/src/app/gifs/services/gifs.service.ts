import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })

export class GifsService {
  //Para guardar los Gif
  public gifList: Gif[] = [];

  //Array de historial de busqueda
  private _tagsHistory: string[] = [];
  //Lo referente a la API y a la URL del Observable
  private apiKey: string = 'qMFuw6b7rv3fZibtxPYHFNBNdbXIiBhF';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';


  //Nos traemos el cliente de http
  constructor(private http: HttpClient) { }

  //El get para no modificar el Array original
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

    const params = new HttpParams()
      //Estos parametros son los que sacas con el postman
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    //Observable, SearchResponse para indicarle de que tipo va a ser
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp => {

        this.gifList = resp.data;
        console.log({ gifs: this.gifList });
      });
  }


}
