import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private uid?:string
  constructor() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
      } else {
        this.uid = undefined
      }
    });
  }

  registerUser(firstname:string,lastname:string,email: string, password: string) {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  signoutUser(){
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("signed out.")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  currentUser(){
  }
  checkUser(){
      if(this.uid){
        return true;
      }
      else{
        return false;
      }
  }
}
