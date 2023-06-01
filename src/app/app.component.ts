import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  navbarFixed: boolean = false
  title = 'Pafixy | Home';

  @HostListener('window:scroll', ['$event']) onScroll(){
    if(window.scrollY > 0){
      this.navbarFixed = true
      document.getElementsByClassName('header')[0].classList.add('shadow');
    }else{
      this.navbarFixed = false
      document.getElementsByClassName('header')[0].classList.add('remove-shadow');

    }
  } 
}
