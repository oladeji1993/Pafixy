import { Component, OnInit, Renderer2 } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent implements OnInit {

  navbarFixed: boolean = false
  title = 'Pafixy | Home';
  showBanner: boolean = true;
  showModal = false;

  


  constructor(
    private cookieService: CookieService,
    private renderer: Renderer2

    ) { }

  ngOnInit() {
    const hasAcceptedCookies = this.cookieService.get('acceptCookies');
    if (hasAcceptedCookies === 'true' || hasAcceptedCookies === 'false') {
      this.showBanner = false;
    }
  }

  acceptCookies() {
    this.cookieService.set('acceptCookies', 'true', 365);
  }

  declineCookies() {
    this.cookieService.set('acceptCookies', 'false', 365);
  }

  toggleModal() {
    this.showModal = !this.showModal;
    if (this.showModal) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  ngOnDestroy() {
    this.renderer.removeStyle(document.body, 'overflow');
  }

}
