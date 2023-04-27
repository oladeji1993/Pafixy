import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-x',
  templateUrl: './pay-x.component.html',
  styleUrls: ['./pay-x.component.scss']
})
export class PayXComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }

}
