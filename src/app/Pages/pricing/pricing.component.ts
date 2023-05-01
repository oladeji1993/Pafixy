import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  
  }


  sales(){
    this.router.navigate(['contact-us'])
  }

}
