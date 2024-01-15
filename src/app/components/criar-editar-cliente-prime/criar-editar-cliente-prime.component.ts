import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { ICliente } from 'src/app/models/cliente-model';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

interface FormCliente {
  codigo: FormControl<string | null>;
  nome: FormControl<string | null>;
  cpf: FormControl<string | null>;
  telefone: FormControl<string | null>;
  endereco: FormControl<string | null>;
  cidade: FormControl<string | null>;
  estado: FormControl<string | null>;
}

@Component({
  selector: 'app-criar-editar-cliente-prime',
  templateUrl: './criar-editar-cliente-prime.component.html',
  styleUrls: ['./criar-editar-cliente-prime.component.scss']
})
export class CriarEditarClientePrimeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject<void>();

  formCliente!: FormGroup<FormCliente>;

  cliente!: ICliente;

  codigo: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.createForm();

    if(this.route.snapshot.paramMap.get('codigo')) {
      this.codigo = this.route.snapshot.paramMap.get('codigo') as string;

      this.dadosEditarCliente();
    }
  }

  createForm() {
    this.formCliente = this.formBuilder.group({
      codigo: ["", Validators.required],
      nome: ["", Validators.required],
      cpf: ["", Validators.required],
      telefone: ["", Validators.required],
      endereco: ["", Validators.required],
      cidade: ["", Validators.required],
      estado: ["", Validators.required]
    });
  }

  dadosEditarCliente(){
    this.cliente = this.clienteService.getClientePorCodigo(this.codigo) as ICliente;

    this.formCliente = this.formBuilder.group({
      codigo: [this.cliente.codigo, Validators.required],
      nome: [this.cliente.nome, Validators.required],
      cpf: [this.cliente.cpf, Validators.required],
      telefone: [this.cliente.telefone, Validators.required],
      endereco: [this.cliente.endereco, Validators.required],
      estado: [this.cliente.estado, Validators.required],
      cidade: [this.cliente.cidade, Validators.required]
    });
  }

  salvar(){
    if (this.formCliente.value && this.formCliente.valid){
      if(this.cliente){
        const atualizarCliente: ICliente = {
          codigo: this.formCliente.value.codigo as string,
          nome: this.formCliente.value.nome as string,
          cpf: this.formCliente.value.cpf as string,
          telefone: this.formCliente.value.telefone as string,
          endereco: this.formCliente.value.endereco as string,
          estado: this.formCliente.value.estado as string,
          cidade: this.formCliente.value.cidade as string,
        }

        this.formCliente.reset();

        this.clienteService.atualizarCliente(atualizarCliente);

        this.messageService.add({
          severity: "success",
          summary: "Sucesso",
          detail: `Cliente atualizado com sucesso!`,
          life: 5000,
        });

        this.router.navigate(['/lista-clientes-prime']);

      } else {

        const criarCliente: ICliente = {
          codigo: this.formCliente.value.codigo as string,
          nome: this.formCliente.value.nome as string,
          cpf: this.formCliente.value.cpf as string,
          telefone: this.formCliente.value.telefone as string,
          endereco: this.formCliente.value.endereco as string,
          estado: this.formCliente.value.estado as string,
          cidade: this.formCliente.value.cidade as string,
        }

        this.formCliente.reset();

        this.clienteService.criarCliente(criarCliente);

        this.messageService.add({
          severity: "success",
          summary: "Sucesso",
          detail: `Cliente criado com sucesso!`,
          life: 5000,
        });

        this.router.navigate(['/lista-clientes-prime']);

      }
    }
  }

  voltar(){
    this.formCliente.reset();
    this.router.navigate(['/lista-clientes-prime']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

