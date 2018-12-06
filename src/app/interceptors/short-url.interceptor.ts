import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { UrlListService } from '../services/url-list.service';

@Injectable({
  providedIn: 'root',
})
export class ShortUrlInterceptor implements CanActivate {
  constructor(private urlService: UrlListService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const urlParam = state.url.substring(1);
    const redirectUrl = this.urlService.storedUrls.find((item => item.shortLink === urlParam));

    if (redirectUrl) {
      window.open(redirectUrl.link, '_self');

      return false;
    }

    return true;
  }
}
