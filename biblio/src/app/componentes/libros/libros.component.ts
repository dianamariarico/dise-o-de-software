import { Component, OnInit } from '@angular/core';
import { SelectionType, ColumnMode } from '@swimlane/ngx-datatable';


import { Libro} from 'src/app/modelos/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  
  public libros: Libro[] = [];
  public columnas = [
    { name: 'Codigo', prop: 'idlibro' },
    { name: 'Libro', prop: 'nomlibro' },
  ];

  public tipoSeleccion = SelectionType;
  public modoColumna = ColumnMode;
  public libroSeleccion: Libro | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public onActivate(event: any) {
    if (event.type == 'click') {
      this.libroSeleccion = event.row;
    }
  }
}

