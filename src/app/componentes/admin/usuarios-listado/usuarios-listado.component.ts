import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clase/usuario';
import { UsuariosService } from 'src/app/servicio/usuarios.service';

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
    if(tipo == "Todos") {
      this.usuariosService.getUsers().subscribe(ret => {
        this.usuariosList = ret;
      });
    }else {
      this.usuariosService.getUsersByProfile(tipo).subscribe(ret => {
        this.usuariosList = ret;
      });
    }
  }

}
