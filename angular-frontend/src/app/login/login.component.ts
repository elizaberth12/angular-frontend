// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Asegúrate de que esta ruta es correcta
import { AuthResponse } from '../services/auth-response.model'; // Asegúrate de importar AuthResponse

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe((response: AuthResponse) => {
      console.log('¡Inició sesión correctamente!', response);
    });
  }
}
