import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private nomeStorage = '#USUARIO';

  constructor() { }

  getUsuario() {
    const usuario = localStorage.getItem(this.nomeStorage);

    if(usuario){
      return true;
    } else {
      return false
    }
  }

  setUsuario(usuario: string) {
    localStorage.setItem(this.nomeStorage, usuario);
  }

  removeUsuario(): void {
    localStorage.removeItem(this.nomeStorage);
  }
}
