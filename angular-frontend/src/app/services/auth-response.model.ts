// src/app/services/auth-response.model.ts

export interface AuthResponse {
  token: string; // El token de autenticación que esperas recibir del backend
  user: {
    id: number; // El ID del usuario
    username: string; // El nombre de usuario
    email: string; // El correo electrónico
  };
}
