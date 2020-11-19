import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { elementAt, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Inscripcion } from '../clase/inscripcion';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

 
  constructor(private db: AngularFireDatabase, private http: HttpClient) { 
    this.inscripcionList = this.db.object('inscripciones').valueChanges().pipe(map(datos=>{return this.objecToArray(datos)}));
  }
  
  inscripcionList;


  createInscripcion(inscripcion:Inscripcion){
    return this.http.post(environment.firebase.databaseURL+"/inscripciones.json",inscripcion);
 }

 getInscripciones(){
  this.inscripcionList = this.db.object('inscripciones').valueChanges().pipe(map(datos=>{return this.objecToArray(datos)}));
   return this.inscripcionList;
 }

 public getInscripcionesByUserEmail(email:string){
   // Antes de devolver la info a la que me suscribo, paso por el map
   return this.http.get(environment.firebase.databaseURL+"/inscripciones.json").pipe(map(resp=>{
     return this.filterByUserEmail(resp,email)}));
 }

 getInscripcionesBySubjectId(id: string) {
      // Antes de devolver la info a la que me suscribo, paso por el map
      return this.http.get(environment.firebase.databaseURL+"/inscripciones.json").pipe(map(resp=>{
        return this.filterBySubjectId(resp,id)}));
 }

 changeStudentGrade(id:string,grade:number){
  return this.http.patch(environment.firebase.databaseURL+"/materias/"+id+".json",{nota:grade}).subscribe(resp=>{
  });    
}


public filterByEmail(res: any, email: string) {
 let inscripciones;
 let aux=null;
 inscripciones=this.objecToArray(res);
   for (let index = 0; index < inscripciones.length; index++) {
     const element = inscripciones[index];
     if (element.alumno.email == email) {
       aux = element;
     }
   }
   return aux;
}

public filterById(res: any, id: string) {
 let inscripciones;
 let aux=null;
 inscripciones=this.objecToArray(res);
   for (let index = 0; index < inscripciones.length; index++) {
     const element = inscripciones[index];
     if (element.id == id) {
       aux = element;
     }
   }
   return aux;
}

public filterByUserEmail(res: any, email: string) {
 let inscripciones;
 let aux=[];
 inscripciones=this.objecToArray(res);
   for (let index = 0; index < inscripciones.length; index++) {
     const element = inscripciones[index];
     if (element.alumno.email == email) {
       aux.push(element);
     }
   }
   return aux;  
}
public filterBySubjectId(res: any, id: string) {
 let inscripciones;
 let aux=[];
 inscripciones=this.objecToArray(res);
   for (let index = 0; index < inscripciones.length; index++) {
     const element = inscripciones[index];
        if (element.materia.id == id && element.alumno.activo == true) {
       aux.push(element);
     }
   }
   return aux;
}



/****Generic Function */

 private objecToArray( datos: Object ){
   const users = [];
   if(datos == null) return [];

   Object.keys( datos ).forEach( key =>{
         let user: any = datos[key];
         user.id=key;
         users.push(user);
   })
   return users;
 }

}
