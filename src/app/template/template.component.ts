import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  private persona: Persona[]=[];
  public cedula: string="";
  public nombre: string="";
  public fecha: string="";
  public ciudad: string="";


  crearPersona(){
    window.alert("Registro guardado: "+this.cedula+" Nombre: "+this.nombre)
  }

  limpiar(){
    this.cedula="";
    this.nombre="";
    this.fecha="";
    this.ciudad="";
  }
}

export interface Persona{
  cedula: string;
  nombre: string;
  fecha: string;
  ciudad: string;
}