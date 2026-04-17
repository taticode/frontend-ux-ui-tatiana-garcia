import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { TranslatePipe } from '../../pipes/translate-pipe';
@Component({
  selector: 'app-about-me',
  imports: [TranslatePipe],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMeComponent {

langService = inject(LanguageService);

  get aboutMeData() {
    return this.langService.t().aboutMe;
  }

}
