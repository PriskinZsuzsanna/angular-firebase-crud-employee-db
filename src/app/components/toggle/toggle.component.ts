import { Component } from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {

  faSun = faSun
  faMoon = faMoon

  isDark: boolean = false

  constructor(@Inject(DOCUMENT) private document: Document){

  }

  toggle(){
    this.document.body.classList.toggle("dark");
    if(this.isDark == false){
      this.isDark = true
    } else {
      this.isDark = false
    }
  }

  detectMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.document.body.classList.add("dark");
      this.isDark = true
    }
  }

}
