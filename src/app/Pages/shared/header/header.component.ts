import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu:any
  menuShow = false;
  toggleNavbar(){
    this.menuShow = !this.menuShow;
  }

  constructor() { }

  ngOnInit(): void {
  }

  openDropDown1(){
    this.menu = document.getElementById("menu1");
        if (this.menu.classList.contains('hidden')) {
          this.menu.classList.remove('hidden');
      } else {
          this.menu.classList.add('hidden');
      }
  }

  openDropDown2(){
    this.menu = document.getElementById("menu2");
        if (this.menu.classList.contains('hidden')) {
          this.menu.classList.remove('hidden');
      } else {
          this.menu.classList.add('hidden');
      }
  }

  // addHover(){
  //   document.getElementsByClassName('innerMenu')[0].classList.add('add-hover');
  // }

}
