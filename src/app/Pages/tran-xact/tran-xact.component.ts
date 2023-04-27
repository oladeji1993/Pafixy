import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tran-xact',
  templateUrl: './tran-xact.component.html',
  styleUrls: ['./tran-xact.component.scss']
})
export class TranXactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }

}
