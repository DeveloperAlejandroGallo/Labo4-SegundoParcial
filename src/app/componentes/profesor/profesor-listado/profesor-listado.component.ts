import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/clase/usuario';
import { UsuariosService } from 'src/app/servicio/usuarios.service';

@Component({
  selector: 'app-profesor-listado',
  templateUrl: './profesor-listado.component.html',
  styleUrls: ['./profesor-listado.component.scss']
})
export class ProfesorListadoComponent implements OnInit {

    constructor(private usuarioService: UsuariosService) { }

    @Output() profesorOutput: EventEmitter<Usuario> = new EventEmitter<Usuario>();
    profesorList: Array<Usuario>;

    ngOnInit(): void {
      this.usuarioService.getUsersByProfile('Profesor').subscribe(ret =>{
        this.profesorList = ret;
      });
    }

    public clickSelectProfesor(profesor) {
      console.warn(profesor);
      this.profesorOutput.emit(profesor);
    }
}
