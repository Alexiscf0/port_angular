import { Component, inject } from '@angular/core';
import { TranslationService } from '../../servicios/translation.service';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class ContactoComponent {
  i18n = inject(TranslationService);
}
