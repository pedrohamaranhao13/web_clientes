import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cliente',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './cadastrar-cliente.html',
  styleUrl: './cadastrar-cliente.css',
})
export class CadastrarCliente {

  mensagemSucesso = signal<string>('');
  mensagemErro = signal<string>('');

  http = inject(HttpClient);

  formulario = new FormGroup({
    nome : new FormControl('', [Validators.required, Validators.minLength(6)]),
    cpf : new FormControl('', [Validators.required]),
    logradouro : new FormControl('', [Validators.required]),
    numero : new FormControl('', [Validators.required]),
    complemento : new FormControl(''),
    bairro : new FormControl('', [Validators.required]),
    cidade : new FormControl('', [Validators.required]),
    uf : new FormControl('', [Validators.required]),
    cep : new FormControl('', [Validators.required])
  });

  buscarCep() {

    const cep = this.formulario.get('cep')?.value;

    if(cep?.length != 8) return;

    this.http.get('https://viacep.com.br/ws/' + cep + "/json")
      .subscribe((data: any) => {
        if(data.erro) return;

        this.formulario.patchValue({
          logradouro: data.logradouro,
          complemento: data.complemento,
          bairro: data.bairro,
          cidade: data.cidade,
          uf: data.uf
        });
      });

  }

  cadastrar() {

    this.mensagemErro.set('');
    this.mensagemSucesso.set('');
    
    const request = {
      nome: this.formulario.value.nome!,
      cpf: this.formulario.value.cpf!,
      enderecos: [
        {
          logradouro: this.formulario.value.logradouro!,
          numero: this.formulario.value.numero!,
          complemento: this.formulario.value.complemento!,
          bairro: this.formulario.value.bairro!,
          cidade: this.formulario.value.cidade!,
          uf: this.formulario.value.uf!,
          cep: this.formulario.value.cep!
        }
      ]
    }

      this.http.post('http://localhost:8081/api/cliente/criar', request, { responseType: 'text' })
        .subscribe({
          next : (resposta) => {
            this.mensagemSucesso.set(resposta);
            this.formulario.reset();
          },
          error: (e) => {
            this.mensagemErro.set(e.error);
          }
        });
  }

}
