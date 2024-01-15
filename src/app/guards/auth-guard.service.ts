import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/auth/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginService.getUsuario() === false){
      this.router.navigate(['/entrar']);
      return false;
    }

    this.loginService.getUsuario();
    return true;
  }
}
