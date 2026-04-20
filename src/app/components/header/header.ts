import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { LanguageService } from '../../services/language';
import { initFlowbite } from 'flowbite';
import { ICONS } from '../../shared/constants/icons';

interface NavItem {
  labelKey: string;
  link: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent implements AfterViewInit {
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
    { labelKey: 'nav.experience', link: '#experience' },
    { labelKey: 'nav.contact', link: '#contact' },
  ];
}