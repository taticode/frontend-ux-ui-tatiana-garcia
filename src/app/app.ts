import { Component, AfterViewInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/header/header';
import { ProjectsComponent } from './features/projects/projects';
import { AboutMeComponent } from './features/about-me/about-me';
import { ExperienceComponent } from './features/experience/experience';
import { ContactComponent } from './features/contact/contact';
import { FooterComponent } from './features/footer/footer';
import { initFlowbite } from 'flowbite';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    ProjectsComponent,
    AboutMeComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements AfterViewInit {
ngAfterViewInit(): void {
    // Inicializamos al cargar
    this.reinit();
  }

  // Creamos un método público por si acaso
  reinit(): void {
    setTimeout(() => {
      initFlowbite();
    }, 100);
  }

}
