import { Component } from '@angular/core';
import { Pessoas } from './model/pessoas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'primeiro-angular-dados';

  pessoaEmCadastro: Pessoas;
  pessoas: Array<Pessoas>;
  constructor() {
    this.pessoaEmCadastro = new Pessoas('', 0);
    this.pessoas = [
      new Pessoas('Rafale Arruda', 19, 'Brasilia'),
      new Pessoas('Arthur Sena', 20, 'João Pessoa'),
      new Pessoas('Pedro Linhares', 18, 'Brasilia'),
    ];
  }

  cadastrar(): void {
    this.pessoas.push(this.pessoaEmCadastro);
    this.pessoaEmCadastro = new Pessoas();
  }

  excluirPss(removerPessoa: Pessoas): void {
    const indx = this.pessoas.findIndex(
      (usuario) => usuario.nome === removerPessoa.nome
    );

    this.pessoas.splice(indx, 1);
  }

  editarPss(pessoas: Pessoas): void {
    this.pessoaEmCadastro = pessoas;
  }
}
