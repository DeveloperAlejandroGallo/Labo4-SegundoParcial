import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMenuComponent } from './componentes/admin/admin-menu/admin-menu.component';
import { UsuariosListadoComponent } from './componentes/admin/usuarios-listado/usuarios-listado.component';
import { AlumnoInscipcionListadoComponent } from './componentes/alumno/alumno-inscipcion-listado/alumno-inscipcion-listado.component';
import { AlumnoInscipcionComponent } from './componentes/alumno/alumno-inscipcion/alumno-inscipcion.component';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { MateriaAltaComponent } from './componentes/materia/materia-alta/materia-alta.component';
import { MateriaListadoComponent } from './componentes/materia/materia-listado/materia-listado.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AutorizaGuard } from './servicio/autoriza.guard';

const routes: Routes = [
  // {path: '**', pathMatch: 'full', redirectTo: 'error'},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'home', component: HomeComponent, canActivate: [AutorizaGuard]},
  {path: 'admin', component: AdminMenuComponent, canActivate: [AutorizaGuard]},
  {path: 'materia/alta', component: MateriaAltaComponent, canActivate: [AutorizaGuard]},
  {path: 'materia/listado', component: MateriaListadoComponent, canActivate: [AutorizaGuard]},
  {path: 'usuario/listado', component: UsuariosListadoComponent},
  {path: 'alumno/inscripcion', component: AlumnoInscipcionComponent},
  {path: 'alumno/inscripcion/listado', component: AlumnoInscipcionListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
