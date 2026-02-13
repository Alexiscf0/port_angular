import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importaciones con la ruta exacta al archivo físico
import { HeaderComponent } from './componentes/header/header';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi';
import { ProyectosComponent } from './componentes/proyectos/proyectos';
import { ContactoComponent } from './componentes/contacto/contacto';
import { TranslationService } from './servicios/translation.service';
import { ThemeService } from './servicios/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SobreMiComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'PortfolioAngu';
  i18n = inject(TranslationService);
  theme = inject(ThemeService); // ensures service is initialized on app start
}
