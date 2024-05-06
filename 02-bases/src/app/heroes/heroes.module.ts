//Importal el CommonModule para que no de un "error" con los *ngIf y *ngFor
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";




@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    CommonModule
  ]
})



export class HeroesModule { }
