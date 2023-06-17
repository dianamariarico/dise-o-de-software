import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectionType, ColumnMode } from '@swimlane/ngx-datatable';


import { Libro } from 'src/app/modelos/libro';
import { LibroService } from 'src/app/servicios/libro.service';
import { LibroEditarComponent } from '../libro-editar/libro-editar.component';
import { HttpErrorResponse } from '@angular/common/http';
import { DecidirComponent } from '../decidir/decidir.component';

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
  public textoBusqueda: string = "";


  constructor(private libroService: LibroService,
    public dialog: MatDialog,
  ) {

  }


  ngOnInit(): void {
    this.listar();
  }

  private pasar(datos: any[]) {
    this.libros = [];
    datos.forEach((item: any) => {
      this.libros.push(new Libro(
        item.idlibro,
        item.nomlibro,
      ));
    });
  }

  public listar() {
    this.libroService.listar()
      .subscribe(respuesta => {
        this.pasar(respuesta);
      },
        err => {
          window.alert(err.message)
        });
  }

  public onActivate(event: any) {
    if (event.type == 'click') {
      this.libroSeleccion = event.row;
    }

  }
  public buscar() {
    this.libroService.buscar(this.textoBusqueda)
      .subscribe(data => {
        this.pasar(data);
      },
        err => {
          window.alert(err.message)
        });

  }
  public agregar() {
    const dialogRef = this.dialog.open(LibroEditarComponent, {
      width: '600px',
      height: '500px',
      data: {
        encabezado: "Agregando libro:",
        libro: new Libro(
          0, //Idlibro
          "", //nomlibro
        ),
      }
    });
    dialogRef.afterClosed().subscribe((datos) => {
      this.guardar(datos.libro);
    }, err => {
      window.alert(err.message)
    }
    );
  }
  public modificar() {
    if (this.libroSeleccion != null && this.libroSeleccion.idlibro >= 0) {

      const dialogRef = this.dialog.open(LibroEditarComponent, {
        width: '600px',
        height: '500px',
        data: {
          encabezado: `Editando a datos de ${this.libroSeleccion.nomlibro}`,
          libro: this.libroSeleccion,

        }
      });
      dialogRef.afterClosed().subscribe((datos) => {
        this.guardar(datos.libro);
      }, err => {
        window.alert(err.message)
      }
      );
    }
    else {
      window.alert("Debe seleccionar un Libro");
    }

  }

  private guardar(libro: Libro) {
    if (libro.idlibro == 0) {
      this.libroService.agregar(libro).subscribe(libroActualizado => {
        this.listar();
        window.alert("Los datos del libro fueron agregados");
      },
        (err: HttpErrorResponse) => {
          window.alert(`Error agregando libro: [${err.message}]`);
        });

    }
    else {
      this.libroService.actualizar(libro).subscribe(libroActualizado => {
        this.listar();
        window.alert("Los datos del libro fueron actualizados");
      },
        (err: HttpErrorResponse) => {
          window.alert(`Error actualizando libro: [${err.message}]`);
        });
    }
  }

  public verificarEliminar() {
    if (this.libroSeleccion != null && this.libroSeleccion.idlibro >= 0) {
      const dialogRef = this.dialog.open(DecidirComponent, {
        width: '400px',
        height: '200px',
        data: {
          titulo: `Eliminando registro de ${this.libroSeleccion.nomlibro}`,
          mensaje: "Está seguro?",
          id: this.libroSeleccion.idlibro
        }
      });

      dialogRef.afterClosed().subscribe(datos => {
        this.eliminar(datos.id);
      },
        err => {
          window.alert(err.message)
        });
    }
    else {
      window.alert("Debe seleccionar un Libro");
    }
  }

  private eliminar(idLibro: number) {
    this.libroService.eliminar(idLibro).subscribe(response => {
      if (response == true) {
        this.listar();
        window.alert("El registro del libro fue eliminado");
      }
      else {
        window.alert("No se pudo eliminar el registro del libro");
      }
    },
      error => {
        window.alert(error.message)
      }
    );
  }

}

