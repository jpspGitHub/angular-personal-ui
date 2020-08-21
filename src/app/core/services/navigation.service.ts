import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PathSite } from '../enums/path-site.enum';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  get currentUrl() {
    return window.location.href;
  }

  constructor(
    private router: Router,
  ) {
  }

  readonly navigateToUrl = (url): Promise<boolean> => this.router.navigateByUrl(url);

  readonly reload = () => window.location.reload();

  readonly goToSite = (section?: string): Promise<boolean> => {
    const extras = section ? { section } : {};
    return this.router.navigate([`/${PathSite.SITE}`, extras]);
  }

  readonly goToAngularDashboard = (): Promise<boolean> => this.router.navigate([`/${PathSite.ANGULAR_DASHBOARD}`]);
}
