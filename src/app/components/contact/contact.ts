import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { TranslatePipe } from '../../pipes/translate-pipe';
@Component({
  selector: 'app-contact',
  imports: [TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  langService = inject(LanguageService);

}


