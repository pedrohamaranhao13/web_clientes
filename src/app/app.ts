import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { CadastrarCliente } from './components/cadastrar-cliente/cadastrar-cliente';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    CadastrarCliente
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('web-clientes');
}
