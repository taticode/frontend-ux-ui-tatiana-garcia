import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language';
import { TranslatePipe } from '../../pipes/translate-pipe';
import { initFlowbite } from 'flowbite';
import { ICONS } from '../../shared/constants/icons';

// 1. Definimos la estructura de cada ítem
interface TimelineItem {
  type: 'job' | 'course';
  company: string;
  rol: string;
  startDate: string;
  endDate: string;
  description: string[];
}

// 2. Definimos la estructura de lo que devuelve el servicio de idiomas
interface TranslationData {
  positions?: TimelineItem[];
  courses?: TimelineItem[];
  [key: string]: any;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})

export class ExperienceComponent {
  private langService = inject(LanguageService);
  readonly icons = ICONS;
  filterSelected = signal<'all' | 'job' | 'course'>('all');

  // Botones de filtro
  readonly filters = [
    { id: 'all', label: 'filterAll' },
    { id: 'job', label: 'filterJobs' },
    { id: 'course', label: 'filterCourses' }
  ] as const;

  timelineList = computed(() => {
    const data = this.langService.t() as TranslationData;
    //Mi timeline con empleos y cursos combinados todavía sin ordenar por fecha
    const combinedData: TimelineItem[] = [
      ...(data.positions || []),
      ...(data.courses || [])
    ];
    //se necesita el lenguaje esp o ing para saber el formato de fecha
    const currentLang = this.langService.currentLang?.() || 'es';

    const parseDate = (dateStr: string): number => {
      if (!dateStr) return 0;
      const parts = dateStr.trim().split(' ');
      if (parts.length < 2) return 0;

      const [monthName, year] = parts;
      const formatter = new Intl.DateTimeFormat(currentLang, { month: 'long' });

      const monthIndex = Array.from({ length: 12 }, (_, i) =>
        formatter.format(new Date(2000, i, 1))
      ).findIndex(m => m.toLowerCase() === monthName.toLowerCase());

      return new Date(parseInt(year), monthIndex >= 0 ? monthIndex : 0).getTime();
    };

    return combinedData
      .filter((item) =>
        this.filterSelected() === 'all' || item.type === this.filterSelected()
      )
      .sort((a, b) => parseDate(b.startDate) - parseDate(a.startDate));
  });

  setFilter(filter: 'all' | 'job' | 'course'): void {
    this.filterSelected.set(filter);
    setTimeout(() => {
      initFlowbite();
    }, 60);
  }
}
