import { Component, AfterViewInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { ProjectsComponent } from './components/projects/projects';
import { AboutMeComponent } from './components/about-me/about-me';
import { ExperienceComponent } from './components/experience/experience';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
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