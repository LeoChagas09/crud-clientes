import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  private readonly destroy$: Subject<void> = new Subject<void>();

  loginForm = this.formBuilder.group({
    login: ['', Validators.required],
    senha: ['', Validators.required],
  });

  usernameFilled = false;
  passwordFilled = false;

  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router
  ){}

  onUsernameChange() {
    this.usernameFilled = this.loginForm.get('login')?.value !== '';
  }

  onPasswordChange() {
    this.passwordFilled = this.loginForm.get('senha')?.value !== '';
  }

  onSubmitLoginForm(): void {
    if(this.loginForm.value && this.loginForm.valid) {

      const usuario = {
        usuario: this.loginForm.value.login as string,
        senha: this.loginForm.value.senha as string,
      }

      const stringUsuario = JSON.stringify(usuario);

      this.loginService.setUsuario(stringUsuario);

      this.loginForm.reset();
      this.router.navigate(['/inicio']);

      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: `Bem vindo ao CRUD Clientes!`,
        life: 5000
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
