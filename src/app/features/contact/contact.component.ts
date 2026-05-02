import { Component, inject, signal, OnInit, ElementRef } from '@angular/core';
import { LanguageService } from '../../services/language';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { ICONS } from '../../shared/constants/icons';

type ChatStatus = 'hidden' | 'typing' | 'shown';

interface SocialLink {
  href: string;
  label: string;
  iconKey: string;
  svgFill: 'currentColor' | 'none';
  strokeIcon: boolean;
  external: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  langService = inject(LanguageService);
  private el = inject(ElementRef);
  readonly icons = ICONS;

  readonly socialLinks: SocialLink[] = [
    { href: 'https://www.linkedin.com/in/tatianagarciafrontend/', label: 'LinkedIn', iconKey: 'linkedin', svgFill: 'currentColor', strokeIcon: false, external: true },
    { href: 'mailto:tatianagarcia.dev@gmail.com', label: 'Mail', iconKey: 'mail', svgFill: 'none', strokeIcon: true, external: false },
    { href: 'https://github.com/taticode', label: 'Github', iconKey: 'github', svgFill: 'currentColor', strokeIcon: false, external: true },
  ];

  // Estados de los mensajes
  statusMsg1 = signal<ChatStatus>('hidden');
  statusMsg2 = signal<ChatStatus>('hidden');
  statusMsg3 = signal<ChatStatus>('hidden');

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.startChatSequence();
          observer.disconnect(); // Se ejecuta solo una vez
        }
      },
      { threshold: 0.4 } // Comienza cuando el 40% del contacto es visible
    );
    observer.observe(this.el.nativeElement);
  }

  private startChatSequence() {
    // Mensaje 1: Recruiter
    setTimeout(() => this.statusMsg1.set('typing'), 600);
    setTimeout(() => this.statusMsg1.set('shown'), 2000);

    // Mensaje 2: Tatiana
    setTimeout(() => this.statusMsg2.set('typing'), 3200);
    setTimeout(() => this.statusMsg2.set('shown'), 4700);

    // Mensaje 3: Recruiter
    setTimeout(() => this.statusMsg3.set('typing'), 6000);
    setTimeout(() => this.statusMsg3.set('shown'), 7500);
  }
}
