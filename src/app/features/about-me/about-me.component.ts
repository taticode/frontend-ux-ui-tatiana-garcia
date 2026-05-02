import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { LanguageService } from '../../services/language';
import { TranslatePipe } from '../../pipes/translate-pipe';

@Component({
  selector: 'app-about-me',
  imports: [TranslatePipe, NgClass],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  langService = inject(LanguageService);

  get aboutMeData() {
    return this.langService.t().aboutMe;
  }

  readonly layoutClasses = [
    { outer: 'lg:row-span-2 lg:rounded-none lg:rounded-tl-4xl', inner: 'flex-col', mb: 'mb-4', mt: 'mt-6', contentWrap: false },
    { outer: '',                                                  inner: 'flex-col', mb: 'mb-2', mt: 'mt-4', contentWrap: false },
    { outer: 'lg:row-span-2 lg:rounded-none lg:rounded-tr-4xl', inner: 'flex-col', mb: 'mb-4', mt: 'mt-6', contentWrap: false },
    { outer: '',                                                  inner: 'flex-col', mb: 'mb-2', mt: 'mt-4', contentWrap: false },
    { outer: 'lg:col-span-2 lg:rounded-none lg:rounded-bl-4xl', inner: 'flex-col sm:flex-row items-end', mb: 'mb-2', mt: 'mt-4', contentWrap: true },
    { outer: 'lg:rounded-none lg:rounded-br-4xl',               inner: 'flex-col', mb: 'mb-2', mt: 'mt-4', contentWrap: false },
  ];
}
