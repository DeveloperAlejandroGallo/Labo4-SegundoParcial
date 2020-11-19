import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Materia } from 'src/app/clase/materia';
import { Usuario } from 'src/app/clase/usuario';
import { MateriasService } from 'src/app/servicio/materias.service';

@Component({
  selector: 'app-materia-listado',
  templateUrl: './materia-listado.component.html',
  styleUrls: ['./materia-listado.component.scss']
})
export class MateriaListadoComponent implements OnInit {

  constructor(private materiaService: MateriasService) { }

  @Input() flagMostraraBotonInput: boolean; 
  @Input() alumno: Usuario = undefined;
  @Output() materiaOutput: EventEmitter<Materia> = new EventEmitter<Materia>();

  materiaList: Array<Materia>;
  mostrarBoton: boolean;
  ngOnInit(): void {
    console.log('materia lis ' + this.alumno);

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


}
