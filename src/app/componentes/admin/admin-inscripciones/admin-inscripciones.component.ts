import { Component, OnInit } from '@angular/core';
import { Inscripcion } from 'src/app/clase/inscripcion';
import { Materia } from 'src/app/clase/materia';
import { Usuario } from 'src/app/clase/usuario';
import { InscripcionService } from 'src/app/servicio/inscripcion.service';
import { MateriasService } from 'src/app/servicio/materias.service';
import { UsuariosService } from 'src/app/servicio/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-inscripciones',
  templateUrl: './admin-inscripciones.component.html',
  styleUrls: ['./admin-inscripciones.component.scss']
})
export class AdminInscripcionesComponent implements OnInit {

  constructor(private materiaService: MateriasService,
    private usrServ: UsuariosService,
    private inscripcionServicio: InscripcionService) { }

  materia: Materia;
  alumno: Usuario;
  alumnoList: Array<Usuario>;
  materiaList: Array<Materia>;
  inscripcion: Inscripcion;

  ngOnInit(): void {
  }

  public recibirUsuario() {

  }

  public guardar() {

    if (this.materiaSeleccionada()) {
      if (this.alumnoSeleccionado()) {

        // la creo con una nota random para que ya pueda visualizarse.
        let nota = Math.floor((Math.random() * 10) + 1);
        this.inscripcion = new Inscripcion(this.materia, this.alumno, nota);

        if (this.materia.cupos > 0) {
          this.inscripcionServicio.createInscripcion(this.inscripcion).subscribe(resp => {
            this.materiaService.cambiarCupoMateria(this.materia.id, this.materia.cupos - 1);
            Swal.fire({
              title: 'Éxito',
              text: 'La Inscripcion fué exitosa.',
              icon: 'success'
            });
            this.btnLimpiar();
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: 'No existen mas cupos para la materia',
            icon: 'error'
          });
        }

      } else {
        Swal.fire({
          title: 'Error',
          text: 'Falta seleccionar la Materia',
          icon: 'error'
        });
      }
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Falta seleccionar Alumno',
        icon: 'error'
      });
    }
  }

  public materiaSeleccionada(): boolean {
    if (this.materia != (undefined && null))
      return true;
    else
      return false;
  }
  public alumnoSeleccionado(): boolean {
    if (this.alumno != (undefined && null))
      return true;
    else
      return false;
  }

  public recibeMateria(mat: Materia) {
    this.materia = mat;
  }
  recibeAlumno(alumno: Usuario) {
    this.alumno = alumno;
  }

  public btnCambiarMateria() {
    this.materia = undefined;
  }
  public btnCambiarAlumno() {
    this.alumno = undefined;
  }

  public btnLimpiar() {
    this.btnCambiarMateria();
    this.btnCambiarAlumno();
  }

}
