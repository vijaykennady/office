import { Component, OnInit } from '@angular/core';
import { OfficeService } from '../office.service';
import { Office } from '../office';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { translateresolver } from 'src/translateresolver';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private offser: OfficeService, private route: Router, private active: ActivatedRoute, private translateService: TranslateService, 
    private langser:LanguageService) {
    translateService.addLangs(['en', 'tam']);


  };
  offices: Office[];
  deloffice: Office = new Office;
  selectedLanguage: string;
  ngOnInit(): void {
    this.langser.onLanguageChange().subscribe((language) => {
      this.translateService.use(language);
    });
    this.alloffices();
  }

  events: any;

  alloffices() {
    this.offser.alloffice().subscribe((off) => {
      console.log(off);
      this.offices = off;
    })
  };
  delete(id: number) {
    this.offser.deletedata(id).subscribe((del) => {
      this.deloffice = del;

    })

  }
  tolist() {
    this.route.navigate(['list1']);
  }
  toview(id: number) {
    this.route.navigate(['view', id])
  }
  toupdate(id: number) {
    this.route.navigate(['update', id])
  }
}
