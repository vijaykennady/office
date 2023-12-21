import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class translateresolver implements Resolve<string> {
  constructor(private translateService: TranslateService) {}

  resolve(route: ActivatedRouteSnapshot): string {
    const selectedLanguage = route.queryParams['lang'];
    if (selectedLanguage) {
      this.translateService.use(selectedLanguage);
      return selectedLanguage;
    } else {
      return 'en'; // Default language
    }
  }
}
