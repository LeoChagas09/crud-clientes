import { Injectable } from '@angular/core';
import { ICliente } from 'src/app/models/cliente-model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: ICliente[] = [
    {
      codigo: '1',
      nome: 'Leonardo Chagas',
      cpf: '123.456.789-11',
      telefone: '(18)99782-4367',
      endereco: 'Irineu Russo, 223',
      cidade: 'Cândido Mota',
      estado: 'SP'
    },
    {
      codigo: '2',
      nome: 'Amanda Silva',
      cpf: '987.654.321-00',
      telefone: '(11)98765-4321',
      endereco: 'Rua das Flores, 45',
      cidade: 'Assis',
      estado: 'SP'
    },
    {
      codigo: '3',
      nome: 'Carlos Oliveira',
      cpf: '456.789.123-33',
      telefone: '(11)97654-3210',
      endereco: 'Avenida Principal, 789',
      cidade: 'Porto Alegre',
      estado: 'RS'
    },
    {
      codigo: '4',
      nome: 'Juliana Santos',
      cpf: '555.444.333-22',
      telefone: '(11)98888-7777',
      endereco: 'Rua das Árvores, 12',
      cidade: 'São Paulo',
      estado: 'SP'
    },
    {
      codigo: '5',
      nome: 'Fernando Souza',
      cpf: '111.222.333-44',
      telefone: '(11)99999-8888',
      endereco: 'Praça da Liberdade, 567',
      cidade: 'São Paulo',
      estado: 'SP'
    },
  ]

  constructor() { }

  getClientes(): ICliente[] {
    return this.clientes;
  }

  getClientePorCodigo(codigo: string): ICliente | undefined {
    return this.getClientes().find(cliente => cliente.codigo === codigo);
  }

  criarCliente(novoCliente: ICliente): void {
    this.clientes.push(novoCliente);
  }

  atualizarCliente(clienteAtualizado: ICliente): void {
    const index = this.clientes.findIndex(cliente => cliente.codigo === clienteAtualizado.codigo);

    if (index !== -1) {
      this.clientes[index] = { ...clienteAtualizado };
    }
  }

  excluirCliente(codigoCliente: string): void {
    const clienteIndex = this.clientes.findIndex(cliente => cliente.codigo === codigoCliente);

    if (clienteIndex !== -1) {
      // O cliente foi encontrado, então pode ser excluído
      this.clientes.splice(clienteIndex, 1);
    }
  }
}
