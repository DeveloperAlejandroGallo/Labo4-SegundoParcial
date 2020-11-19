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
  @Input() alumno: Usuario = undefined;
  @Output() materiaOutput: EventEmitter<Materia> = new EventEmitter<Materia>();

  materiaList: Array<Materia>;
  mostrarBoton: boolean;
  usuario: Usuario;
  usuarioActivo;


  ngOnInit(): void {

    this.authService.currentUser().then(resp=>{
      this.usuarioActivo=resp;
    
      this.usuarioService.getUsersByEmail(this.usuarioActivo.email).subscribe(ret => {
        this.usuario = ret;
      });
  
    });


    if(this.alumno !=  undefined  ){
      this.materiaService.getMateriasByUserEmail(this.alumno.email).subscribe(ret =>{
        this.materiaList = ret;
      });  
    } else {
      this.materiaService.getMaterias().subscribe(ret =>{
        this.materiaList = ret;
      });

    }
  }

  public clickSelectMateria(mat: Materia) {
    this.materiaOutput.emit(mat);
  }

  // public recibirUsuario(usr: Usuario) {
  //   console.table(usr);
  //   this.usuario = usr;
  // }
}
