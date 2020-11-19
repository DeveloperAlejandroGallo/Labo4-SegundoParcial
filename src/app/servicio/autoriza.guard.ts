import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticarFirebaseService } from './autenticar-firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AutorizaGuard implements CanActivate {

  constructor(private autentica: AutenticarFirebaseService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const url: string = state.url;
      
      return this.estaLogueado(url);
  }
  
  public estaLogueado(url: string): boolean {
    if (this.autentica.estaLogueado )
      return true;
      
    this.autentica.redirectUrl = url;
    this.router.navigate(['/error']);
    return false;
  }

}
