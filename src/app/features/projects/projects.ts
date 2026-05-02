import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { ICONS } from '../../shared/constants/icons';

interface Project {
  thumbnail: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  gitRepo?: string;
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
  readonly icons = ICONS;

  get projectList() {
    return this.langService.t().projects;
  }
}
