import { Component } from '@angular/core';
import { JobService } from 'src/app/job.service';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  faEnvelope = faEnvelope
  mailto: string = "'mailto:'{{x.email}}"

  constructor(public service: JobService){

  }

  makeArray(skills:string){
    let stringArray = Array.from(skills.split(','))
    stringArray = stringArray.filter(item => item != '')
    return stringArray
  }
}
