import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ErrorComponent } from './componentes/error/error.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { AlumnoMenuComponent } from './componentes/alumno/alumno-menu/alumno-menu.component';
import { AlumnoListadoComponent } from './componentes/alumno/alumno-listado/alumno-listado.component';
import { ProfesorMenuComponent } from './componentes/profesor/profesor-menu/profesor-menu.component';
import { ProfesorListadoComponent } from './componentes/profesor/profesor-listado/profesor-listado.component';
import { AdminMenuComponent } from './componentes/admin/admin-menu/admin-menu.component';
import { MateriaAltaComponent } from './componentes/materia/materia-alta/materia-alta.component';
import { MateriaListadoComponent } from './componentes/materia/materia-listado/materia-listado.component';
import { AutenticarFirebaseService } from './servicio/autenticar-firebase.service';
import { StorageFirebaseService } from './servicio/storage-firebase.service';
import { SubirImagenComponent } from './componentes/subir-imagen/subir-imagen.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosListadoComponent } from "./componentes/admin/usuarios-listado/usuarios-listado.component";
import { AlumnoInscipcionComponent } from "./componentes/alumno/alumno-inscipcion/alumno-inscipcion.component";
import { AlumnoInscipcionListadoComponent } from './componentes/alumno/alumno-inscipcion-listado/alumno-inscipcion-listado.component';
import { NotasPipe } from './pipes/notas.pipe';
import { ColorMateriasDirective } from './directivas/color-materias.directive';
import { MateriaDetalleComponent } from './componentes/materia/materia-detalle/materia-detalle.component';
import { ProfesorMateriasListadoComponent } from './componentes/profesor/profesor-materias-listado/profesor-materias-listado.component';
import { UsuariosPipe } from './pipes/usuarios.pipe';
import { AdminInscripcionesComponent } from './componentes/admin/admin-inscripciones/admin-inscripciones.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    ErrorComponent,
    NavBarComponent,
    AlumnoMenuComponent,
    AlumnoListadoComponent,
    ProfesorMenuComponent,
    ProfesorListadoComponent,
    AdminMenuComponent,
    MateriaAltaComponent,
    MateriaListadoComponent,
    SubirImagenComponent,
    UsuariosListadoComponent,
    AlumnoInscipcionComponent,
    AlumnoInscipcionListadoComponent,
    NotasPipe,
    ColorMateriasDirective,
    MateriaDetalleComponent,
    ProfesorMateriasListadoComponent,
    UsuariosPipe,
    AdminInscripcionesComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AutenticarFirebaseService, StorageFirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
