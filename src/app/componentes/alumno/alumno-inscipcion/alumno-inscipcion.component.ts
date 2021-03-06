import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inscripcion } from 'src/app/clase/inscripcion';
import { Materia } from 'src/app/clase/materia';
import { Usuario } from 'src/app/clase/usuario';
import { InscripcionService } from 'src/app/servicio/inscripcion.service';
import { MateriasService } from 'src/app/servicio/materias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumno-inscipcion',
  templateUrl: './alumno-inscipcion.component.html',
  styleUrls: ['./alumno-inscipcion.component.scss']
})
export class AlumnoInscipcionComponent implements OnInit {

  constructor(private router: Router,
              private inscripcionServicio: InscripcionService,
              private materiaService: MateriasService) { }

  alumno: Usuario;
  profesor: Usuario;
  materia: Materia;
  nota: number;
  inscripcion: Inscripcion;


  ngOnInit(): void {
  }

  public materiaSeleccionada(): boolean {
    if(this.materia != (undefined && null) )
      return true;
    else
      return false;
  }

  public recibeMateria(mat: Materia) {
    this.materia = mat;
  }

  public btnCambiarMateria() {
    this.materia = undefined;
  }

  recibirAlumno(alumno: Usuario) {
    this.alumno = alumno;
  }

  public guardar() {

      // la creo con una nota random para que ya pueda visualizarse.
      let nota = Math.floor((Math.random() * 10) + 1);
      this.inscripcion = new Inscripcion(this.materia, this.alumno, nota);

      if(this.materia.cupos > 0)
      {
        this.inscripcionServicio.createInscripcion(this.inscripcion).subscribe(resp => {
          this.materiaService.cambiarCupoMateria(this.materia.id, this.materia.cupos -1);
          Swal.fire({
            title: 'Éxito',
            text: 'La Inscripcion fué exitosa.',
            icon: 'success'
          });
          this.btnCambiarMateria();
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'No existen mas cupos para la materia',
          icon: 'error'
        });
      }
  }
}
