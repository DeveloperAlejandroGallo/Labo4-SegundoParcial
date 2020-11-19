import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor-menu',
  templateUrl: './profesor-menu.component.html',
  styleUrls: ['./profesor-menu.component.scss']
})
export class ProfesorMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  public materiasACargo() {
    this.router.navigate(['profesor/materias/listado']);
  }

}
