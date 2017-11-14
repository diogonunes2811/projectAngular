import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpPessoaComponent } from './Pessoa/httppessoa.component';

import { HttpMilitarComponent } from './Militar/httpmilitar.component';
import { HttpCarroComponent } from './Carro/httpcarro.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpPessoaComponent,
    HttpMilitarComponent,
    HttpCarroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
  {
    path: 'pessoa',
    component: HttpPessoaComponent
  },
  {
    path: 'militar',
    component: HttpMilitarComponent
  },
  {
    path: 'carro',
    component: HttpCarroComponent
  }
])
  ],
  providers: [HttpPessoaComponent, HttpMilitarComponent, HttpCarroComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
