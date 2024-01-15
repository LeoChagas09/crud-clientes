import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ICliente } from 'src/app/models/cliente-model';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ListaClientesComponent implements OnInit {

  clientes: ICliente[] = [];
  clientesFiltrados: ICliente[] = [];


  filtroNome: string = '';

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ){

  }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(){
    this.clientes = this.clienteService.getClientes();
  }

  novoCliente(){
    this.router.navigate([`/criar-cliente/`]);
  }

  editarCliente(cliente: ICliente){
    this.router.navigate([`/editar-cliente/${cliente.codigo}`]);
  }

  deletarCliente(cliente: ICliente){
    this.confirmationService.confirm({
      message: `Tem certeza que deseja deletar o cliente ${cliente.nome}?`,
      header: 'Deletar cliente!',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
        this.clienteService.excluirCliente(cliente.codigo);
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Cliente deletado com sucesso!' });
        this.listarClientes();
      },
    });
  }

}
