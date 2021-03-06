import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminInscripcionesComponent } from './componentes/admin/admin-inscripciones/admin-inscripciones.component';
import { AdminMenuComponent } from './componentes/admin/admin-menu/admin-menu.component';
import { UsuariosListadoComponent } from './componentes/admin/usuarios-listado/usuarios-listado.component';
import { AlumnoInscipcionListadoComponent } from './componentes/alumno/alumno-inscipcion-listado/alumno-inscipcion-listado.component';
import { AlumnoInscipcionComponent } from './componentes/alumno/alumno-inscipcion/alumno-inscipcion.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { MateriaAltaComponent } from './componentes/materia/materia-alta/materia-alta.component';
import { MateriaListadoComponent } from './componentes/materia/materia-listado/materia-listado.component';
import { ProfesorMateriasListadoComponent } from './componentes/profesor/profesor-materias-listado/profesor-materias-listado.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AdministradorGuard } from './servicio/administrador.guard';
import { AutorizaGuard } from './servicio/autoriza.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent, data: {animation: 'login'}},
  {path: 'registro', component: RegistroComponent, data: {animation: 'registro'}},
  {path: 'error', component: ErrorComponent},
  {path: 'home', component: HomeComponent, 
      canActivate: [AutorizaGuard], 
      data: {animation: 'home'}},
  {path: 'admin', component: AdminMenuComponent, canActivate: [AdministradorGuard]},
  {path: 'materia/alta', component: MateriaAltaComponent, canActivate: [AdministradorGuard]},
  {path: 'materia/listado', component: MateriaListadoComponent, canActivate: [AdministradorGuard]},
  {path: 'admin/inscripciones', component: AdminInscripcionesComponent, canActivate: [AdministradorGuard]},
  {path: 'usuario/listado', component: UsuariosListadoComponent},
  {path: 'alumno/inscripcion', component: AlumnoInscipcionComponent},
  {path: 'alumno/inscripcion/listado', component: AlumnoInscipcionListadoComponent},
  {path: 'profesor/materias/listado', component: ProfesorMateriasListadoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'error'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
