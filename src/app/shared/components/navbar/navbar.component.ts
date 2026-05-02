import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { TranslatePipe } from '../../../pipes/translate-pipe';
import { ICONS } from '../../constants/icons';
import { LanguageService } from '../../../services/language';

interface NavItem {
  labelKey: string;
  link: string;
}


@Component({
  selector: 'app-navbar',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements AfterViewInit {
  readonly icons = ICONS;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

    ngAfterViewInit(): void {
      setTimeout(() => {
        initFlowbite();
      });
    }

  langService = inject(LanguageService);

  //Selector de idiomas
  languages = ['es', 'en'] as const;
  navItems: NavItem[] = [
    { labelKey: 'nav.projects', link: '#projects' },
    { labelKey: 'nav.about', link: '#about' },
    { labelKey: 'nav.experience', link: '#experience' },
    { labelKey: 'nav.contact', link: '#contact' },
  ];

}
