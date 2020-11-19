import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materia } from 'src/app/clase/materia';
import { Usuario } from 'src/app/clase/usuario';

@Component({
  selector: 'app-alumno-menu',
  templateUrl: './alumno-menu.component.html',
  styleUrls: ['./alumno-menu.component.scss']
})
export class AlumnoMenuComponent implements OnInit {

  constructor(private router: Router) { }

  menu: string = '';
  profesor: Usuario;
  materia: Materia;


  ngOnInit(): void {
    this.menu = '';

  }

public inscribirse() {
  this.router.navigate(['alumno/inscripcion']);
}

public materiasInscripto() {
 this.router.navigate(['alumno/inscripcion/listado']);
}

}
