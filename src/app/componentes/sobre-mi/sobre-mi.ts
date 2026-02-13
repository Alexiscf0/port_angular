import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../servicios/translation.service';

@Component({
  selector: 'app-sobre-mi',
  imports: [CommonModule],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMiComponent {
  fotoPerfil = 'img/Foto_Personal.jpg';
  i18n = inject(TranslationService);
}
