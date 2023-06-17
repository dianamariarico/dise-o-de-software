import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Libro } from 'src/app/modelos/libro';

export interface DatosLibro {
  encabezado: string;
  libro: Libro;
}

@Component({
  selector: 'app-libro-editar',
  templateUrl: './libro-editar.component.html',
  styleUrls: ['./libro-editar.component.css']
})
export class LibroEditarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LibroEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public datos: DatosLibro) {
  }

  ngOnInit(): void {

  }

  

}


