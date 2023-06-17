import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosComponent } from './componentes/libros/libros.component';
import { ReferenciasMaterialModule } from './referencias-material/referencias-material.module';

import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { LibroEditarComponent } from './componentes/libro-editar/libro-editar.component';
import { DecidirComponent } from './componentes/decidir/decidir.component';


@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    LibroEditarComponent,
    DecidirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReferenciasMaterialModule,
    HttpClientModule,
    NgxDatatableModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

