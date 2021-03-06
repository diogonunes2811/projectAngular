import { Component } from '@angular/core';
import { HttpPessoaService } from './httppessoa.service';
import { Pessoa } from './pessoa.component';

@Component({
  selector: 'app-root',
  templateUrl: './pessoa.component.html',
  providers: [HttpPessoaService]
})
export class HttpPessoaComponent {
  pessoas: Pessoa[];
  pessoa: Pessoa;

  constructor(private httpPessoas: HttpPessoaService) {
    this.pessoa = new Pessoa();
    this.getPessoas();
  }

  getPessoas() {
    this.httpPessoas.getPessoas().subscribe(
      pessoas => this.pessoas = pessoas,
      error => alert(error),
      () => console.log('terminou')
    );
  }

  addPessoa() {
    this.httpPessoas.addPessoa(this.pessoa).subscribe(
      data => data,
      error => alert(error),
      () => this.getPessoas()
    );
  }

  alterPessoa(pessoa2: Pessoa) {
    this.pessoa = pessoa2;
  }

  updatePessoa() {
    this.httpPessoas.updatePessoa(this.pessoa).subscribe(
      data => data,
      error => alert(error),
      () => this.getPessoas()
    );

    this.pessoa = new Pessoa;
  }

  novoPessoa() {
    this.pessoa = new Pessoa;
  }

  delPessoa(pessoa2: Pessoa) {
    this.httpPessoas.delPessoa(pessoa2).subscribe(
      data => data,
      error => alert(error),
      () => this.getPessoas()
    );

    this.pessoa = new Pessoa;

  }

}
