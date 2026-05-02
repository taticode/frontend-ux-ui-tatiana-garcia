import { Component, AfterViewInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
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
