import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clase/usuario';
import { UsuariosService } from 'src/app/servicio/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios-listado',
  templateUrl: './usuarios-listado.component.html',
  styleUrls: ['./usuarios-listado.component.scss']
})
export class UsuariosListadoComponent implements OnInit {

  constructor(private usuariosService: UsuariosService, 
              private router: Router) { }

  perfil: string = 'Todos';
  usuariosList: Array<Usuario>

  ngOnInit(): void {
    this.usuariosService.getUsers().subscribe(ret => {
      this.usuariosList = ret;
    });
  }

  public listarUsuariosPorTipo(tipo: string){
    console.info('que viene en el tipo: ' + tipo);

    switch(tipo){
      case 'Todos':
        this.usuariosService.getUsers().subscribe(ret => {
          this.usuariosList = ret;
        });
      break;
      case 'Alumno': case 'Profesor': case 'Administrador':
        this.usuariosService.getUsersByProfile(tipo).subscribe(ret => {
          this.usuariosList = ret;
        });
        break;
      case 'Borrados':
        this.usuariosService.getUsersErased().subscribe(ret => {
          this.usuariosList = ret;
        });
      break;
    }

  }


  public baja(usr: Usuario) {
    // let fechaBaja = new Date();

    this.usuariosService.changeUserState(usr.id, false);
    Swal.fire({
      title: 'Éxito',
      text: 'Alumno ' + usr.nombre +', '+ usr.apellido + ' dado de baja',
      icon: 'success'
    });
    this.usuariosService.getUsersByProfile(usr.perfil).subscribe(ret => {
      this.usuariosList = ret;
    });
  }


}
