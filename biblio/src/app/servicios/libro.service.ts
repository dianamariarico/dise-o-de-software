import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // java script reactivo
import { Libro } from '../modelos/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.urlBase + "libros";
  }
  public listar(): Observable<any> 
  //recibir la lista de países utilizando angular reactivo para recibir  respuestas asincrónicas
  {
    let urlT = this.url + "/listar";
    return this.http.get<any[]>(urlT);
    // any es cualquier tipo de dato,es un arreglo
    // urlt es la url que le vamos a consumir
  }
  public buscar(nombre: String): Observable<any> {
    let urlT = this.url + "/buscar/" + nombre;
    return this.http.get<any[]>(urlT);
  }

  public agregar(libro: Libro): Observable<any> {
    let urlT = this.url + "/agregar";
    return this.http.post<any>(urlT, libro);
  }


  public actualizar(libro: Libro): Observable<any> {
    let urlT = this.url + "/modificar";
    return this.http.put<any>(urlT, libro);
  }

  public eliminar(id: number): Observable<any> {
    let urlT = `${this.url}/eliminar/${id}`;
    return this.http.delete<any>(urlT);
  }

}
