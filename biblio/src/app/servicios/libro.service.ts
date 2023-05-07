import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; // java script reactivo

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

}
