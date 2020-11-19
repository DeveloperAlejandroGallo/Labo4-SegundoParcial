import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/clase/materia';
import { Usuario } from 'src/app/clase/usuario';
import { AutenticarFirebaseService } from 'src/app/servicio/autenticar-firebase.service';
import { UsuariosService } from 'src/app/servicio/usuarios.service';

@Component({
  selector: 'app-profesor-materias-listado',
  templateUrl: './profesor-materias-listado.component.html',
  styleUrls: ['./profesor-materias-listado.component.scss']
})
export class ProfesorMateriasListadoComponent implements OnInit {

  constructor(private authService: AutenticarFirebaseService,
              private usuarioService: UsuariosService) { }

  materiaSeleccionada: Materia;
  usuarioActual: Usuario;
  usuarioActivo;

  ngOnInit(): void {
    this.authService.currentUser().then(resp=>{
      this.usuarioActivo=resp;
      console.log('usuarioActivo ' + this.usuarioActivo.email);
    
      this.usuarioService.getUsersByEmail(this.usuarioActivo.email).subscribe(ret => {
        this.usuarioActual = ret;
        console.log('Prof Mat Listado onInit Usr Actual:');
        console.table(this.usuarioActual);
        // this.usrActivoOutput.emit(this.usuario);
      });
  
    });
  }

  public recibirUsuario(usr: Usuario){
    console.log('Prof Mat Listado Recibir usr: Usr Actual:');
    console.table(usr);
    this.usuarioActual = usr;
  }

  public recibirMateria(mat: Materia) {
    this.materiaSeleccionada = mat;
  }
  public cambiarMateria() {
    this.materiaSeleccionada = undefined;
  }
}
