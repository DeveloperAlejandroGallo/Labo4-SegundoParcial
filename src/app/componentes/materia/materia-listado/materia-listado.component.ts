import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Materia } from 'src/app/clase/materia';
import { Usuario } from 'src/app/clase/usuario';
import { AutenticarFirebaseService } from 'src/app/servicio/autenticar-firebase.service';
import { MateriasService } from 'src/app/servicio/materias.service';
import { UsuariosService } from 'src/app/servicio/usuarios.service';

@Component({
  selector: 'app-materia-listado',
  templateUrl: './materia-listado.component.html',
  styleUrls: ['./materia-listado.component.scss']
})
export class MateriaListadoComponent implements OnInit {

  constructor(private materiaService: MateriasService,
              private authService: AutenticarFirebaseService,
              private usuarioService: UsuariosService) { }

  @Input() flagMostraraBotonInput: boolean; 
  @Input() usuarioInput: Usuario = undefined;
  @Output() materiaOutput: EventEmitter<Materia> = new EventEmitter<Materia>();
  @Input() flagMostarnNav: boolean = true;

  materiaList: Array<Materia>;
  mostrarBoton: boolean;
  profesor: Usuario;
  usuarioActivo;
  usuarioLogueado: Usuario;

  ngOnInit(): void {

    this.authService.currentUser().then(resp=>{
      this.usuarioActivo=resp;
    
      this.usuarioService.getUsersByEmail(this.usuarioActivo.email).subscribe(ret => {
        this.usuarioLogueado = ret;

        console.table(this.usuarioLogueado);
        switch(this.usuarioLogueado.perfil){
          case 'Profesor':
            this.materiaService.getMateriasByUserEmail(this.usuarioLogueado.email).subscribe(ret =>{
              this.materiaList = ret;
            });
            break;
          case 'Administrador':
            this.materiaService.getMaterias().subscribe(ret =>{
              this.materiaList = ret;
            });
            break;
          case 'Alumno':
            this.materiaService.getMaterias().subscribe(ret =>{
              this.materiaList = ret;
            });
            break;
        }

      });
  
    });


  }


  public clickSelectMateria(mat: Materia) {
    this.materiaOutput.emit(mat);
  }

  // public recibirUsuario(usr: Usuario) {
  //   console.log('Mat Listado recibir Usr:');
  //   console.table(usr);
  //   this.usuarioInput = usr;
  // }
}
