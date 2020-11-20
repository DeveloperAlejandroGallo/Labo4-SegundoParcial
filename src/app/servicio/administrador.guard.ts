import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../clase/usuario';
import { AutenticarFirebaseService } from './autenticar-firebase.service';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AdministradorGuard implements CanActivate {

  constructor(private autentica: AutenticarFirebaseService, 
              private router: Router,
              private usuarioService: UsuariosService){

                this.autentica.currentUser().then(rta =>{
                  this.usrActivo = rta;
            
                  this.usuarioService.getUsersByEmail(this.usrActivo.email).subscribe(res => {
                    this.usuario = res;
                  });
            
                });

              }
  
  usrActivo;
  usuario: Usuario;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const url: string = state.url;
    
    return this.esAdministrador(url);;
  }
  
  

  public esAdministrador(url: string): boolean{
    
    if (this.usuario.perfil == 'Administrador' )
      return true;
  
    this.autentica.redirectUrl = url;
    this.router.navigate(['/error']);
    return false;


  }

}
