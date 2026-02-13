import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para el @for

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  misProyectos = [
    { src: 'assets/img/Portada_Proyecto.png', url: 'https://github.com/Alexiscf0/Portfolio_pro', alt: 'Portfolio' },
    { src: 'assets/img/proyecto2.png', url: '#', alt: 'Proyecto 2' },
    { src: 'assets/img/proyecto3.png', url: '#', alt: 'Proyecto 3' },
    { src: 'assets/img/proyect4.png', url: '#', alt: 'Proyecto 4' }
  ];
}
