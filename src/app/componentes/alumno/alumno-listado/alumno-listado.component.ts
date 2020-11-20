import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/clase/usuario';
import { UsuariosService } from 'src/app/servicio/usuarios.service';

@Component({
  selector: 'app-alumno-listado',
  templateUrl: './alumno-listado.component.html',
  styleUrls: ['./alumno-listado.component.scss']
})
export class AlumnoListadoComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) {
    this.usuariosService.getUsersByProfile('Alumno').subscribe(ret => {
      this.usuariosList = ret;
    });
   }

   @Output() alumnoOutput: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  usuariosList: Array<Usuario>;

  ngOnInit(): void {

  }

  public seleccionar(usr) {
    this.alumnoOutput.emit(usr);
  }



}
