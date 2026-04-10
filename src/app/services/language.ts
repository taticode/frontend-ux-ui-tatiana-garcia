import { Injectable, signal, computed } from '@angular/core';
import { ES } from '../i18n/es'; 
import { EN } from '../i18n/en';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  private _currentLang = signal<'es' | 'en'>('es');
  public t = computed(() => this._currentLang() === 'es' ? ES : EN);
  public currentLang = computed(() => this._currentLang());

  constructor() { }

  setLanguage(lang: 'es' | 'en') {
    this._currentLang.set(lang);
  }

}

