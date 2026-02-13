import { Component, inject } from '@angular/core';
import { ThemeService } from '../../servicios/theme.service';
import { TranslationService } from '../../servicios/translation.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  theme = inject(ThemeService);
  i18n = inject(TranslationService);
}
