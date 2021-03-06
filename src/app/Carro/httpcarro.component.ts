import { Component } from '@angular/core';
import { HttpCarroService } from './httpcarro.service';
import { Carro } from './carro.component';

@Component({
  selector: 'app-root',
  templateUrl: './carro.component.html',
  providers: [HttpCarroService]
})
export class HttpCarroComponent {
  carros: Carro[];
  carro: Carro;

  constructor(private httpCarros: HttpCarroService) {
    this.carro = new Carro();
    this.getCarros();
  }

  getCarros() {
    this.httpCarros.getCarros().subscribe(
      carros => this.carros = carros,
      error => alert(error),
      () => console.log('terminou')
    );
  }

  addCarro() {
    this.httpCarros.addCarro(this.carro).subscribe(
      data => data,
      error => alert(error),
      () => this.getCarros()
    );
  }

  alterCarro(carro2: Carro) {
    this.carro = carro2;
  }

  alterarCarro() {
    this.httpCarros.updateCarro(this.carro).subscribe(
      data => data,
      error => alert(error),
      () => this.getCarros()
    );

    this.carro = new Carro;
  }

  novoCarro() {
    this.carro = new Carro;
  }

  delCarro(carro2: Carro) {
    this.httpCarros.delCarro(carro2).subscribe(
      data => data,
      error => alert(error),
      () => this.getCarros()
    );

    this.carro = new Carro;

  }


}
