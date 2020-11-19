import { Materia } from './materia';
import { Usuario } from './usuario';

export class Inscripcion {
    materia: Materia;
    alumno: Usuario;
    nota: number;


    constructor (materia: Materia, alumno: Usuario, nota?: number){
        this.materia = materia;
        this.alumno = alumno;
        this.nota = nota;
    }

    
}
