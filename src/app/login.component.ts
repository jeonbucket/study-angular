import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import {PasswordValidator} from './passwordValidator';

import {LoginService} from './login.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  providers: [LoginService]
})
export class LoginComponent {
  form: FormGroup;

  constructor(fb: FormBuilder, private _loginService: LoginService) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required,
        PasswordValidator.cannotContainSpace])]
    })
  }

  // form = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required)
  // });

  login() {
    // console.log(this.form.value);
    var result = this._loginService.login(this.form.controls['username'].value, this.form.controls['password'].value);

    if (!result) {
      this.form.controls['password'].setErrors({
        invalidLogin: true
      });
    } else {
      console.log(this.form.value);
    }
  }
}
