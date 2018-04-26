import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: string;
  password: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    if (form.dirty) {
      this.email = form.value.email;
      this.authService.setIsEmailEntered(true);
      this.authService.setEmail(this.email);
      console.log('podales maila: ', form.value.email);
      console.log('getEmail: ', this.authService.getEmail());
    }
  }

  onSigninPass(form: NgForm) {
    if (form.dirty) {
      this.password = form.value.password;
      this.authService.setPassword(this.password);
      console.log('zalogowales sie z haslem: ', form.value.password);
      this.authService.verifyUser();
    }
  }
}
