import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { Sidebar } from 'primeng/sidebar';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  sidebarVisible: boolean = false;

  itensUsuario: MenuItem[] = [];

  constructor(
    private router: Router,
    private loginService: LoginService,
    private confirmationService: ConfirmationService,
  ) {}


  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }

  ngOnInit(): void {
    this.listaItensUsuario();
  }

  listaItensUsuario(){
    this.itensUsuario = [
      {
        label: 'Sair',
        icon: 'pi pi-sign-out icon',
        command: () => this.logout(),
      }
    ]
  }

  async logout() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja sair do sistema?',
      header: 'Sair do Sistema',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
        this.loginService.removeUsuario();
        this.router.navigate(['entrar'])
      },
      reject: () => {
        this.confirmationService.close();
      }
  });
  }

}
