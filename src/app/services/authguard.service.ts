import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // authService: AuthService = inject(AuthService);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ):boolean | Observable<boolean> | Promise<boolean> { //this method should return a boolean value or an observable that emits a boolean value

      if(this.authService.IsAuthenticated()){
        return true;
      }
      else {
        alert('To do this you need to login first');
        this.router.navigate(['/login']);
        return false;
      }
  }


  
}
