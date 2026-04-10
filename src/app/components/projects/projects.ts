
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { TranslatePipe } from '../../pipes/translate-pipe';


interface Project {
  thumbnail: string,
  title: string,
  description: string,
  tags: string[],
  button: string
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})

export class ProjectsComponent {
  langService = inject(LanguageService);
  get projectList() {
      return this.langService.t().projects;
    }
}
