import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageService } from '../services/language';
@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // Esto permite que el texto cambie en cuanto el Signal del servicio se actualice
})
export class TranslatePipe implements PipeTransform {
  private langService = inject(LanguageService);

  transform(path: string): any {
    if (!path) return '';
    
    const keys = path.split('.');
    let translation: any = this.langService.t();

    for (const key of keys) {
      if (translation && translation[key]) {
        translation = translation[key];
      } else {
        return path; // Si no lo encuentra, te devuelve la clave para que no explote
      }
    }
    return translation;
  }
}