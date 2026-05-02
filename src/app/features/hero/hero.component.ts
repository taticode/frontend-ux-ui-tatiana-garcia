import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { LanguageService } from '../../services/language';
import { initFlowbite } from 'flowbite';
import { ICONS } from '../../shared/constants/icons';



@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit {
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




}
