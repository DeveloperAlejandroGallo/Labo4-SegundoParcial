import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inscripcion } from 'src/app/clase/inscripcion';
import { Materia } from 'src/app/clase/materia';
import { InscripcionService } from 'src/app/servicio/inscripcion.service';

@Component({
  selector: 'app-materia-detalle',
  templateUrl: './materia-detalle.component.html',
  styleUrls: ['./materia-detalle.component.scss']
})
export class MateriaDetalleComponent implements OnInit {

  @Input() materiaInput: Materia;
  constructor(private inscripcionService: InscripcionService,
              private router: Router) { }

  inscripcionList: Array<Inscripcion>;


  ngOnInit(): void {
    console.log('Materia seleccionada id:' + this.materiaInput.id);
    console.table(this.materiaInput);

    this.inscripcionService.getInscripcionesBySubjectId(this.materiaInput.id).subscribe(result =>{
      this.inscripcionList = result;
    });
  }

}
