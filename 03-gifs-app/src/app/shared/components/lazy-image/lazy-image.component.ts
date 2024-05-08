
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})

export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  //Determinar que imagen se va a cargar
  public hasLoaded: boolean = false;



  ngOnInit(): void {
    if (!this.url) throw new Error('URL is required');
  }

  //Timeout de 1000ms para que tarden en cargar 1 segundo y se vea "mejor"
  onLoad(): void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);

  }
}
