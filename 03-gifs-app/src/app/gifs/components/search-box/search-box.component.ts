import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text" class="form-control" placeholder="Buscar gifs..."
  (keyup.enter)="searchTag()"
  #txtTagInput> <!--Referencia para si mismo a la vida buena-->
  `
})

export class SearchBoxComponent {

  //Permite hacer una referencia en local, al elemento txtTagInput
  @ViewChild('txtTagInput')
  // Not Null Operator "!"
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor() { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    console.log({ newTag });

  }


}
