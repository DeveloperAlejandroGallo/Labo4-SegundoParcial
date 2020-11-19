import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onClickMaterias() {
    this.router.navigate(['materia/alta']);
  }
  public onClickMateriasListado() {
    this.router.navigate(['materia/listado']);
  }
  public onClickUsuariosListado() {
    this.router.navigate(['usuario/listado']);
  }
  

}
