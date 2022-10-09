import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  nombre: string = "Jason"
  apellido: string = "Castro Blanco"
  edad: number = 18
  pasatiempos: Array<string> = ["Volar drones", " programar", " tocar guitarra"]
  fiesta: string = "Al ser mayor de 18 pueder ir a parrandear!"
  noFiesta: string = "LOS SIENTO!! Eres demasiado joven para ir a parrandear!"

  incrementarEdad(){
    this.edad = this.edad + 1;
     }

  disminuirEdad(){
    this.edad = this.edad - 1;
  }

  constructor() { 

  }

  ngOnInit(): void {
  }

}
