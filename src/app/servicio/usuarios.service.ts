import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Usuario } from '../clase/usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  userList;
  public usuarioActual: Usuario;

  constructor(private fireUsers:AngularFireDatabase, private http:HttpClient) {
    
    this.userList= this.fireUsers.object('usuarios').valueChanges().pipe(map(datos=>{return this.objecToArray(datos)}));

   }

   createUser(user:Usuario){
     return this.http.post(environment.firebase.databaseURL+"/usuarios.json",user);
  }

  getUsers(){
    this.userList= this.fireUsers.object('usuarios').valueChanges().pipe(map(datos=>{return this.objecToArray(datos)}));
    return this.userList;
  }

  getUsersByEmail(email:string){
    // Antes de devolver la info a la que me suscribo, paso por el map
    return this.http.get(environment.firebase.databaseURL+"/usuarios.json").pipe(map(resp=>{
      return this.filterByEmail(resp,email)}));
  }

  getUsersByProfile(profile:string){
    return this.http.get(environment.firebase.databaseURL+"/usuarios.json").pipe(map(resp=>{
      return this.filterByProfile(resp,profile)}));
  }

  getUsersBySpeciality(spec:string){
    return this.http.get(environment.firebase.databaseURL+"/usuarios.json").pipe(map(resp=>{
      return this.filterBySpeciality(resp,spec)}));
  }

  getUsuarioById(id:string){
    return this.http.get(environment.firebase.databaseURL+"/usuarios.json").pipe(map(resp=>{
      return this.filterById(resp,id)}));
  }

  changeUserState(id:string,state:boolean){
    return this.http.patch(environment.firebase.databaseURL+"/usuarios/"+id+".json",{estado:state}).subscribe(resp=>{
    });    
  }


public filterByEmail(res: any, email: string) {
  let usuarios;
  let aux=null;
  usuarios=this.objecToArray(res);
    for (let index = 0; index < usuarios.length; index++) {
      const element = usuarios[index];
      if (element.email == email) {
        aux = element;
      }
    }
    return aux;
}

public filterById(res: any, id: string) {
  let usuarios;
  let aux=null;
  usuarios=this.objecToArray(res);
    for (let index = 0; index < usuarios.length; index++) {
      const element = usuarios[index];
      if (element.id == id) {
        aux = element;
      }
    }
    return aux;
}

public filterByProfile(res: any, profile: string) {
  let usuarios;
  let aux=[];
  usuarios=this.objecToArray(res);
    for (let index = 0; index < usuarios.length; index++) {
      const element = usuarios[index];
      // console.warn(element);
      if (element.perfil == profile) {
        aux.push(element);
      }
    }
    return aux;  
}
public filterBySpeciality(res: any, spec: string) {
  console.log('filterBySpeciality:' + spec);
  let usuarios;
  let aux=[];
  usuarios=this.objecToArray(res);
    for (let index = 0; index < usuarios.length; index++) {
       const element = usuarios[index];
      // console.log('element '+index+ ':' +element);      
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
