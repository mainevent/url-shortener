import {Injectable} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  NavigationStart,
  Route,
  Router,
  RouterStateSnapshot,
  RoutesRecognized
} from '@angular/router';
import {UrlListService} from '../services/url-list.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShortUrlInterceptor implements CanActivate {
  constructor(private urlService: UrlListService, private router: Router) {

  }

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
