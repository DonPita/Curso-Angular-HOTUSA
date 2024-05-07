import { DbzService } from '../services/dbz.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //Solo con el constructor ya lo puedes usar en el html
  constructor(public dbzService: DbzService) {

  }

}
