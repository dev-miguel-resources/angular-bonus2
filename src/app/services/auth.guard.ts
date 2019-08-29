import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate { //recuerden es la pagina para proteger las rutas

  constructor(private auth: AuthService ) {}

  canActivate(
    next: ActivatedRouteSnapshot, //ruta a la cual quiero llamar
    state: RouterStateSnapshot): Observable<boolean> { //la ruta actual
    return this.auth.isAuthenticated$; //retorna si esta autenticado
  }

}
