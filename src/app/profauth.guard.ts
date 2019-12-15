import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import {Router,NavigationEnd} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProfauthGuard implements CanActivate {
  constructor(private myservice : AuthServiceService,private router : Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!this.myservice.isloggedIn && !this.myservice.prof ){
        alert("Please Login First!");
         this.router.navigateByUrl('/prof-login');
       
         return false;
      }
    return true;
  }
  
}
