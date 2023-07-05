import { Component } from '@angular/core';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { JobService } from 'src/app/job.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  faFacebook = faFacebook
  faTwitter = faTwitter
  faLinkedin = faLinkedin

  constructor(public service: JobService){

  }
}
