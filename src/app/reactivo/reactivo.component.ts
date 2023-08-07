import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {
  reativo: FormGroup<any>;

  constructor(private formBuilder: FormBuilder) {
    this.reativo = this.formBuilder.group({
      // Define tus campos y validaciones aquí
    });
  }
  ngOnInit(): void {
    this.reativo = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      ciudad: ['', Validators.required]
      // Agrega más campos aquí según tus necesidades
    });
  }
  onSubmit() {
    if (this.reativo.valid) {
      // Realiza acciones con los datos del formulario
      const formData = this.reativo.value;
      console.log(formData);
      
    }
  }
  crearPersona(){
    const formData = this.reativo.value;
    window.alert("Nombre: "+formData.nombre+" - Cedula: "+formData.cedula);
  }
  limpiar() {
    this.reativo.reset();
  }
}
