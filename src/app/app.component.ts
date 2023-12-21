import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private transalteservice: TranslateService, private router: Router, private langser: LanguageService) {
    transalteservice.addLangs(['en', 'tam']);
  }
  ngOnInit(): void {
    this.langser.onLanguageChange().subscribe((language) => {
      this.transalteservice.use(language);
  
   
      
    });
  }
lang:string=this.langser.getSelectedLanguage();
  title = 'office';
  events: any;
  // changeLang(event: any) {
  //   console.log(this.events);

  //   this.transalteservice.use(event);
  // }
  changeLang(event: any): void {
    const selectedLanguage = event.target.value;
    this.langser.setSelectedLanguage(selectedLanguage);
  }

}
