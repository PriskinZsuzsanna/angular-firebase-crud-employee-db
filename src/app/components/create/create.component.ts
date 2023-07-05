import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { JobService } from 'src/app/job.service';
import { Jobprofile } from 'src/app/jobprofile';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  jp : Jobprofile = new Jobprofile ()
  createResult: boolean = false
  createSuccess: boolean = false
  createError: boolean = false

  constructor(public service: JobService, private router: Router, public auth:AuthService){
    auth.protectContent('create')
  }


  async add(){
    this.jp.user.userName = this.auth.currentUser()
    this.jp.user.email = this.auth.currentUserEmail()
    console.log(this.jp)
    //this.service.add(this.jp)
    this.createResult = await this.service.addWithFeedback(this.jp)
    if(this.createResult == true){
      this.createSuccess = true
      setTimeout(() => {
        this.router.navigate(['dashboard'])
      }, 3000)
    } else {
      this.createError = true
    }
    this.jp = new Jobprofile();
    this.service.loadUserData();
  }

}
