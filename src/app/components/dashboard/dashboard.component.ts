import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { faEnvelope, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth.service';
import { JobService } from 'src/app/job.service';
import { Jobprofile } from 'src/app/jobprofile';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  faEnvelope = faEnvelope
  faTrash = faTrash
  faEdit = faEdit

  constructor(public service: JobService, private router: Router, public auth: AuthService){
    auth.protectContent('dashboard')
  }

  makeArray(skills:string){
    let stringArray = Array.from(skills.split(','))
    stringArray = stringArray.filter(item => item != '')
    return stringArray
  }

  goToEdit(id:string,key: string, value: Jobprofile ){
    this.service.getJobprofileCopy(value)
    this.service.edit(key, value)
    this.router.navigate(['edit', id])
  }
  goToCreate(){
    this.router.navigate(['create'])
  }
}

