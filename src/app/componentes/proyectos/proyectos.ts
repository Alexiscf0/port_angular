import { Component, inject } from '@angular/core';
import { TranslationService } from '../../servicios/translation.service';

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class ProyectosComponent {
  i18n = inject(TranslationService);

  misProyectos = [
    {
      url: 'https://github.com/Alexiscf0/Portfolio_pro',
      src: 'img/Portada_Proyecto.png',
      alt: 'Portfolio',
    },
    {
      url: '#',
      src: 'img/proyecto2.png',
      alt: 'Proyecto 2',
    },
    {
      url: '#',
      src: 'img/proyecto3.png',
      alt: 'Proyecto 3',
    },
    {
      url: '#',
      src: 'img/proyect4.png',
      alt: 'Proyecto 4',
    },
  ];
}
