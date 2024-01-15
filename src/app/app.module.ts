import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { ListaClientesPrimeComponent } from './components/lista-clientes-prime/lista-clientes-prime.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { CriarEditarClienteComponent } from './components/criar-editar-cliente/criar-editar-cliente.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltroPipe } from './pipes/filtro.pipe';
import { CriarEditarClientePrimeComponent } from './components/criar-editar-cliente-prime/criar-editar-cliente-prime.component';
import { LoginComponent } from './components/auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ListaClientesPrimeComponent,
    ListaClientesComponent,
    CriarEditarClienteComponent,
    FiltroPipe,
    CriarEditarClientePrimeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PrimeNgModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
