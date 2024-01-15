import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslatePrimeNGService } from './services/translate/translate-prime-ng.service';
import { LoginService } from './services/auth/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud-clientes';

  usuario: any;

  constructor(
    private primengConfig: PrimeNGConfig,
    public logado: LoginService,
    config: PrimeNGConfig,
    translate: TranslatePrimeNGService
  ){
    translate.getTranslate('pt')
    .then(res => config.setTranslation(res));
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  usuarioLogado(){
    this.usuario = this.logado.getUsuario();

    if(this.usuario){
      return true;
    } else {
      return false;
    }
  }
}
