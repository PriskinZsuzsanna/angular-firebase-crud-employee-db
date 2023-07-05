import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { JobService } from 'src/app/job.service';
import { Jobprofile } from 'src/app/jobprofile';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  createResult: boolean = false
  createSuccess: boolean = false
  createError: boolean = false
  actual : Jobprofile = new Jobprofile()


  constructor(public service: JobService, public auth: AuthService, private route: ActivatedRoute, private router: Router){ 
    auth.protectContent('edit')
  }


  /*save() {
    this.service.update(this.service.actualEditKey, this.service.actualEdit);
    this.service.actualEdit = new Jobprofile();
    this.service.actualEditKey = '';
    this.router.navigate(['dashboard'])
  }*/

  async saveEdited(){
    this.createResult = await this.service.updateWithFeedback(this.service.actualEditKey, this.service.actualEdit)
    if(this.createResult == true){
        this.actual = new Jobprofile ()
        this.service.actualEditKey = '';
        this.createSuccess = true
        setTimeout(() => {
         
          this.router.navigate(['dashboard']);
        }, 3000)
      }
    
  }


}
