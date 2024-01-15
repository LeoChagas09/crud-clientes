import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarEditarClienteComponent } from './components/criar-editar-cliente/criar-editar-cliente.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ListaClientesPrimeComponent } from './components/lista-clientes-prime/lista-clientes-prime.component';
import { CriarEditarClientePrimeComponent } from './components/criar-editar-cliente-prime/criar-editar-cliente-prime.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NotAuthGuard } from './guards/not-auth-guard.service';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'entrar', component: LoginComponent, canActivate: [NotAuthGuard]
  },
  {
    path: 'lista-clientes-prime', component: ListaClientesPrimeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'criar-cliente-prime', component: CriarEditarClientePrimeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'editar-cliente-prime/:codigo', component: CriarEditarClientePrimeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'lista-clientes', component: ListaClientesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'criar-cliente', component: CriarEditarClienteComponent, canActivate: [AuthGuard]
  },
  {
    path: 'editar-cliente/:codigo', component: CriarEditarClienteComponent, canActivate: [AuthGuard]
  },

  { path: '**', redirectTo: 'lista-clientes-prime', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
