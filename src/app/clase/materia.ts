import { Usuario } from './usuario';

export class Materia {
    nombre: string;
    cuatrimestre: number;
    cupos: number;
    profesor: Usuario;
    foto: string;
    anio: number;
    id?: string;


    constructor(nombre: string, cuatrimestre: number, cupos: number, profesor: Usuario, foto: string, anio:number) {
        this.nombre = nombre;
        this.cuatrimestre = cuatrimestre;
        this.cupos = cupos;
        this.profesor = profesor;
        this.foto = foto;
        this.anio = anio;
    }
}
