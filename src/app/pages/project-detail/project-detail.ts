import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  templateUrl: './project-detail.html'
})
export class ProjectDetailComponent implements OnInit {
  proyectoId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Capturamos el nombre del proyecto de la URL
    this.proyectoId = this.route.snapshot.paramMap.get('slug');
  }
}