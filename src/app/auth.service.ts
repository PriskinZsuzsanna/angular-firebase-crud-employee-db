import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  showLoggedOut: boolean = false
  loginMessage: boolean = false
  
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    
  }

  GoogleAuth(){
    return this.AuthLogin(new GoogleAuthProvider());
  }

  logout(){
    localStorage.clear();
    this.afAuth.signOut();
    this.showLoggedOut = true
    this.router.navigate(['login'])
    setTimeout(() => {
      this.router.navigate(['list'])
      this.showLoggedOut = false
    },3000)
  }

  isLoggedIn(): boolean{
    let email = localStorage.getItem('email');
    let displayname = localStorage.getItem('displayname');
    return email != null && displayname != null;
  }

  currentUser(){
    let displayname = localStorage.getItem('displayname');
    if (displayname != null){
      return displayname;
    }
    return 'anonymus';
  }

  currentUserEmail(){
    let email = localStorage.getItem('email');
    if (email != null){
      return email;
    }
    return 'anonymus';
  }

  AuthLogin(provider: any){
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        if (result.user != undefined){
          localStorage.setItem('email', <string>result.user.email);
          localStorage.setItem('displayname', <string>result.user.displayName);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  protectContent(site: string){
    if(this.isLoggedIn() == false){
      this.loginMessage = true
      this.router.navigate(['login', site])
    }
  }

}