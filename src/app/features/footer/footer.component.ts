import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { LanguageService } from '../../services/language';
import { ICONS } from '../../shared/constants/icons';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  langService = inject(LanguageService);
  readonly icons = ICONS;
}
