import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DatosDecision {
  titulo: string;
  mensaje: string;
  id: number;
}

@Component({
  selector: 'app-decidir',
  templateUrl: './decidir.component.html',
  styleUrls: ['./decidir.component.css']
})
export class DecidirComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DecidirComponent>,
    @Inject(MAT_DIALOG_DATA) public datos: DatosDecision) {
  }

  ngOnInit(): void {
  }

}
