import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay-x',
  templateUrl: './pay-x.component.html',
  styleUrls: ['./pay-x.component.scss']
})
export class PayXComponent implements OnInit {

  
  private fragment!: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }


  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment)?.scrollIntoView();
    } catch (e) { }
  }

}
