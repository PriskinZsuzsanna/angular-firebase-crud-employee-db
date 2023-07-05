import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { JobService } from 'src/app/job.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  site: string = ''

  constructor(public service: JobService, public auth: AuthService, private router: Router, private route : ActivatedRoute) {
    this.route.params.subscribe(t => {
      console.log(t['site'])
      this.site = t['site']
    })
  }


  login() {
    this.auth.GoogleAuth().then(t => {
      console.log(this.site)
      this.service.loadUserData();
      if(this.site == undefined){
        this.router.navigate(['dashboard'])
      } else {
        this.router.navigate([this.site])
      }
    });
  }
}
