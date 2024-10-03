import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  host: {ngSkipHydration: 'true'}
})
export class LoginComponent {

  constructor(private autheticationService:AuthenticationService,private router:Router){}
  email = new FormControl("",[
    Validators.required,
    Validators.email
  ]);

  password = new FormControl("",[
    Validators.required,
    Validators.minLength(8)
  ]);

  loginForm = new FormGroup({
    email : this.email,
    password : this.password
  });

  loginUser(){
    this.autheticationService.loginUser(this.loginForm.value.email!,this.loginForm.value.password!)
    this.router.navigate(["/code"])
    console.log(this.loginForm.value)
  }
} 