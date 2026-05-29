import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cliente',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastrar-cliente.html',
  styleUrl: './cadastrar-cliente.css',
})
export class CadastrarCliente {

  http = inject(HttpClient);

  formulario = new FormGroup({
    nome : new FormControl(''),
    cpf : new FormControl('')
  });

  cadastrar() {
    
    const params = new HttpParams()
      .set('nome', this.formulario.value.nome!)
      .set('cpf', this.formulario.value.cpf!)

      this.http.post('http://localhost:8080/api/cliente/criar', null, { params: params, responseType: 'text' })
        .subscribe((resposta) => {
          console.log(resposta)
        });
  }

}
