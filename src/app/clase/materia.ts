import { Usuario } from './usuario';

export class Materia {
    nombre: string;
    cuatrimestre: number;
    cupos: number;
    profesor: Usuario;
    foto: string;
    id?: string;


    constructor(nombre: string, cuatrimestre: number, cupos: number, profesor: Usuario, foto: string) {
        this.nombre = nombre;
        this.cuatrimestre = cuatrimestre;
        this.cupos = cupos;
        this.profesor = profesor;
        this.foto = foto;
    }
}
