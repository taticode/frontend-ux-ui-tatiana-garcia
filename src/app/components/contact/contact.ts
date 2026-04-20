import { Component, inject, signal, OnInit, ElementRef } from '@angular/core';
import { LanguageService } from '../../services/language';
import { TranslatePipe } from '../../pipes/translate-pipe';

type ChatStatus = 'hidden' | 'typing' | 'shown';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent implements OnInit {
  langService = inject(LanguageService);
  private el = inject(ElementRef);

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