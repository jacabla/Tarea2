import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {

  menu = ["Empleados", "Tiendas", "Contacto", "Log In"]

  constructor() { }

  ngOnInit(): void {
  }

}
