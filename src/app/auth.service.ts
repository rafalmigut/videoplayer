import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router) {}
  email: string;
  password: string;
  users;
  loggedUser;
  isEmailEntered = false;

  public setIsEmailEntered(value: boolean) {
    this.isEmailEntered = value;
  }

  public getIsEmailEntered() {
    return this.isEmailEntered;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public setPassword(password: string) {
    this.password = password;
  }

  public getEmail() {
    return this.email;
  }

  public verifyUser() {
    this.http.get('http://localhost:4200/assets/users.json')
      .subscribe(data => {
        this.users = data;
         const filtered =  this.users.slice().filter(user => {
          return user.email === this.email && user.password === this.password;
        });
        if (filtered.length > 0) {
          this.loggedUser = filtered;
        }
        this.router.navigate(['/videos']);
      });
  }

  public isLoggedIn() {
    return this.loggedUser ? true : false;
  }
}
