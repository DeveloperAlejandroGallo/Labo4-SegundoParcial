import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Materia } from '../clase/materia';
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {
  
  constructor(private db: AngularFireDatabase, private http: HttpClient) { 
    this.materiaList = this.db.object('materias').valueChanges().pipe(map(datos=>{return this.objecToArray(datos)}));
  }
  
  materiaList;


  createMateria(materia:Materia){
    return this.http.post(environment.firebase.databaseURL+"/materias.json",materia);
 }

 getMaterias(){
    this.materiaList = this.db.object('materias').valueChanges().pipe(map(datos=>{return this.objecToArray(datos)}));
    return this.materiaList;
 }

 getMateriasByUserEmail(email:string){
   // Antes de devolver la info a la que me suscribo, paso por el map
   return this.http.get(environment.firebase.databaseURL+"/materias.json").pipe(map(resp=>{
     return this.filterByEmail(resp,email)}));
 }

//  getUsersByProfile(profile:string){
//    return this.http.get(environment.firebase.databaseURL+"/materias.json").pipe(map(resp=>{
//      return this.filterByProfile(resp,profile)}));
//  }

//  getUsersBySpeciality(spec:string){
//    return this.http.get(environment.firebase.databaseURL+"/materias.json").pipe(map(resp=>{
//      return this.filterBySpeciality(resp,spec)}));
//  }

//  getUsuarioById(id:string){
//    return this.http.get(environment.firebase.databaseURL+"/materias.json").pipe(map(resp=>{
//      return this.filterById(resp,id)}));
//  }

 cambiarCupoMateria(id:string,cupos:number){
   return this.http.patch(environment.firebase.databaseURL+"/materias/"+id+".json",{cupos:cupos}).subscribe(resp=>{
   });    
 }


public filterByEmail(res: any, email: string) {
 let materias;
 let aux=[];
 materias=this.objecToArray(res);
   for (let index = 0; index < materias.length; index++) {
     const element = materias[index];
     if (element.profesor.email == email) {
       aux.push(element);
     }
   }
   return aux;
}

public filterById(res: any, id: string) {
 let materias;
 let aux=null;
 materias=this.objecToArray(res);
   for (let index = 0; index < materias.length; index++) {
     const element = materias[index];
     if (element.id == id) {
       aux = element;
     }
   }
   return aux;
}

public filterByProfile(res: any, profile: string) {
 let materias;
 let aux=[];
 materias=this.objecToArray(res);
   for (let index = 0; index < materias.length; index++) {
     const element = materias[index];
     if (element.profile == profile) {
       aux.push(element);
     }
   }
   return aux;  
}
public filterBySpeciality(res: any, spec: string) {
 console.log('filterBySpeciality:' + spec);
 let materias;
 let aux=[];
 materias=this.objecToArray(res);
   for (let index = 0; index < materias.length; index++) {
     const element = materias[index];
     console.log('element '+index+ ':' +element);      
     if (element.speciality == spec) {
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
