import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.auth.setEmail(null);
      this.auth.setPassword(null);
      this.auth.setIsEmailEntered(false);
      this.router.navigate(['/signin']);
    }
  }
}
