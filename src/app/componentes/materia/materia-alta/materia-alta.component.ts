import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materia } from 'src/app/clase/materia';
import { Usuario } from 'src/app/clase/usuario';
import { MateriasService } from 'src/app/servicio/materias.service';
import { StorageFirebaseService } from 'src/app/servicio/storage-firebase.service';
import { UsuariosService } from 'src/app/servicio/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-materia-alta',
  templateUrl: './materia-alta.component.html',
  styleUrls: ['./materia-alta.component.scss']
})
export class MateriaAltaComponent implements OnInit {

  constructor(private router: Router, 
              private usrService: UsuariosService,
              private materiaService: MateriasService,
              private storage: StorageFirebaseService) { }

  materia: Materia;
  nombre: string;
  cuatri: number = 0;
  cupos: number = 0;
  foto: string;
  publicURLFoto: string;
  profesorList: Array<Usuario>;
  profesor: Usuario = undefined;
  msg: string;
  ngOnInit(): void {
    this.usrService.getUsersByProfile('Profesor').subscribe( resp =>  {
        this.profesorList = resp;

        console.log('Lista de profesores: '+resp);
      }
    );
  }

  public recibirProfesor(profe) {
    console.warn('profe elegido: '+profe);
    this.profesor = profe;
  }

  public cambiarProfesor() {
    this.profesor = undefined;
  }

  public limpiarForm() {
    this.materia = undefined;
    this.nombre = '';
    this.cuatri = 1;
    this.cupos = 0;
    this.foto = undefined;
    this.profesor = undefined;
  }


  public crear() {

    if(this.camposValidos())
    {
      let materiaMetadata = {
        nombre: this.nombre,
        cuatri: this.cuatri,
        profe: this.profesor.email
      }
      let refImg;

      this.storage.uploadFile(this.nombre, this.foto, materiaMetadata).then(resp => {
        refImg = this.storage.linkToPublicFile(this.nombre);
        console.log("refImg" + refImg);
        refImg.getDownloadURL().subscribe((URL) => {
          console.log("link publico: " + URL);
          this.publicURLFoto = URL;
          this.materia = new Materia(this.nombre, this.cuatri, this.cupos, this.profesor, this.publicURLFoto);
  
            this.materiaService.createMateria(this.materia).subscribe((res: any) => {
              console.log('Materia Creada: ' + this.nombre);
              Swal.fire({
                title: 'Exito',
                text: 'Materia ' + this.nombre + ' creada.',
                icon: 'success'
              });
              this.limpiarForm();
            });
        });
      }).catch(error => { 
        console.log("Error al subir la foto " + error),
        Swal.fire({
          title: 'Error',
          text: "Error al subir la foto " + error,
          icon: 'error'
        });
      });
    }
    else
    {
      Swal.fire({
        title: 'Error',
        text: this.msg,
        icon: 'error'
      });
    }
  }

  private camposValidos():boolean {
    if(this.nombre == ('' || undefined)) {
      this.msg = 'Debe completar el nombre';
      return false;
    }
    if(this.cuatri == (0 || undefined)) {
      this.msg = 'Debe completar el cuatrimestre';
      return false;
    }
    if(this.profesor ==  undefined) {
      this.msg = 'Debe seleccionar un profesor';
      return false;
    }
    return true;
  }

  imgUpload(img) {
    this.foto = img;
  }
  public volver() {
    this.router.navigate(['/home']);
  }


}
