import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }
  private selectedLanguage: string = 'en';
  private languageChangeEmitter = new EventEmitter<string>();
  getSelectedLanguage(): string {
    return this.selectedLanguage;
  }

  setSelectedLanguage(language: string): void {
    this.selectedLanguage = language;
    this.languageChangeEmitter.emit(language);
  }
  onLanguageChange(): EventEmitter<string> {
    return this.languageChangeEmitter;
  }
}
