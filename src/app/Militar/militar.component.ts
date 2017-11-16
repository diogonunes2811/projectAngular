import { Pessoa } from '../Pessoa/pessoa.component';
import { Component } from '@angular/core';

export class Militar extends Pessoa {
//  public id: string;
  public nomedeguerra: string;

  constructor() {
    super();
  }
}
