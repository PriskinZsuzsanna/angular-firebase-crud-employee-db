import { Component, HostListener } from '@angular/core';
import { AuthService } from './auth.service';
import { JobService } from './job.service';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebase-angular-job-page';

  faBars = faBars
  faClose = faClose

  constructor(public auth: AuthService, public service: JobService){}
  
  @HostListener("window:scroll", []) onWindowScroll(){
    let element = document.querySelector('nav') as HTMLElement;
    let container = document.querySelector('.container') as HTMLElement;
    let navContainer = document.querySelector('.nav-container') as HTMLElement;
    let header = document.querySelector('header') as HTMLElement;
    if (window.pageYOffset > element.clientHeight / 2) {
      element.classList.add('scroll');
      container.classList.add('scroll');
      navContainer.classList.add('scroll');
      header.classList.add('scroll');
    } else {
      element.classList.remove('scroll');
      container.classList.remove('scroll');
      header.classList.remove('scroll');
      navContainer.classList.remove('scroll');
    }
    const verticalOffset = window.pageYOffset 
          || document.documentElement.scrollTop 
          || document.body.scrollTop || 0;
  }

  toggleMenu(){
    this.service.isOpen = !this.service.isOpen
  }

  closeMenu(){
    if(this.service.isOpen){
      this.toggleMenu()
    }
  }
}
