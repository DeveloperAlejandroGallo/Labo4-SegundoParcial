import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Inscripcion } from 'src/app/clase/inscripcion';
import { Usuario } from 'src/app/clase/usuario';
import { AutenticarFirebaseService } from 'src/app/servicio/autenticar-firebase.service';
import { InscripcionService } from 'src/app/servicio/inscripcion.service';

@Component({
  selector: 'app-alumno-inscipcion-listado',
  templateUrl: './alumno-inscipcion-listado.component.html',
  styleUrls: ['./alumno-inscipcion-listado.component.scss']
})
export class AlumnoInscipcionListadoComponent implements OnInit {

  constructor(private inscripcionService: InscripcionService,
              private autenticaService: AutenticarFirebaseService) { }

  usrActivo;
  inscripcionesList: Array<Inscripcion>;

  ngOnInit(): void {

    this.autenticaService.currentUser().then(ret => {
      this.usrActivo = ret;



    });

    }

    public recibirAlumno(alumno: Usuario) {
      console.table(alumno);

      this.inscripcionService.getInscripcionesByUserEmail(alumno.email).subscribe(res =>{
        this.inscripcionesList = res;
        console.table(this.inscripcionesList);
      });
    }

}
