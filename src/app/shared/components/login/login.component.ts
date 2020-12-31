import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'st-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit(){
    if(this.form.valid){
      console.log('Submit', this.form.value);
      this.validateLogin(this.form.value)
    }
  }

  private validateLogin(user: User){
    if(user.username === 'admin' && user.password == 'admin'){
      //redirection
      this.router.navigate(['']);
    } else {
      console.error('Invalid credentials');

    }
  }

}
