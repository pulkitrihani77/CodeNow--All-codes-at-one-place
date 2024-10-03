import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  host: {ngSkipHydration: 'true'}
})
export class SignupComponent {

  constructor(private authtencationService:AuthenticationService,private router:Router){}
  firstname = new FormControl("",[
    Validators.required
  ]);

  lastname = new FormControl("",[
    Validators.required
  ]);

  email = new FormControl("",[
    Validators.required,
    Validators.email
  ]);

  password = new FormControl("",[
    Validators.required,
    Validators.minLength(8)
  ]);

  signupForm = new FormGroup({
    firstname : this.firstname,
    lastname : this.lastname,
    email : this.email,
    password : this.password
  });

  signupUser(){
    this.authtencationService.registerUser(this.signupForm.value.firstname!,this.signupForm.value.lastname!,this.signupForm.value.email!,this.signupForm.value.password!)
    this.router.navigate(["/login"])
    console.log(this.signupForm.value)
  }
}
