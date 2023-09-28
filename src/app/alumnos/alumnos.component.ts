import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno.model';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnos: Alumno[] = [
    { nombre: 'Juan', edad: 20, promedio: 8.5 },
    { nombre: 'María', edad: 22, promedio: 9.1234 },
    { nombre: 'Joaquín', edad: 25, promedio: 10 },
    { nombre: 'Pedro', edad: 21, promedio: 4.233 },
    { nombre: 'Javier', edad: 22, promedio: 3.545 },
    { nombre: 'Hector', edad: 24, promedio: 7.365 },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
