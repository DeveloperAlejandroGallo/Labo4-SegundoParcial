import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    MateriaListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
