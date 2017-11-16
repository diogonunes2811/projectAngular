import { Component } from '@angular/core';
import { HttpMilitarService } from './httpmilitar.service';
import { Militar } from './militar.component';

@Component({
  selector: 'app-root',
  templateUrl: './militar.component.html',
  providers: [HttpMilitarService]
})
export class HttpMilitarComponent {
  militares: Militar[];
  militar: Militar;

  constructor(private httpMilitares: HttpMilitarService) {
    this.militar = new Militar();
    this.getMilitares();
  }

  getMilitares() {
    this.httpMilitares.getMilitares().subscribe(
      militares => this.militares = militares,
      error => alert(error),
      () => console.log('terminou')
    );
  }

  addMilitar() {
    this.httpMilitares.addMilitar(this.militar).subscribe(
      data => data,
      error => alert(error),
      () => this.getMilitares()
    );
  }

  alterMilitar(militar2: Militar) {
    this.militar = militar2;
  }

  updateMilitar() {
    this.httpMilitares.updateMilitar(this.militar).subscribe(
      data => data,
      error => alert(error),
      () => this.getMilitares()
    );

    this.militar = new Militar;
  }

  novoMilitar() {
    this.militar = new Militar;
  }

  delMilitar(militar2: Militar) {
    this.httpMilitares.delMilitar(militar2).subscribe(
      data => data,
      error => alert(error),
      () => this.getMilitares()
    );

    this.militar = new Militar;

  }


}
