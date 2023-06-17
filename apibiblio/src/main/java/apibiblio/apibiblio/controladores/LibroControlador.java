package apibiblio.apibiblio.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import apibiblio.apibiblio.interfaces.ILibroServicio;
import apibiblio.apibiblio.modelos.Libro;

@RestController
@RequestMapping("/libros")
public class LibroControlador {

    @Autowired //Crea la instancia del servicio 
    private ILibroServicio servicio;
    
    @GetMapping("/listar")
    public List<Libro> listar() {
        return servicio.listar();
    }  
    @RequestMapping(value = "/buscar/{nombre}", method = RequestMethod.GET)
    public List<Libro> buscar(@PathVariable String nombre) {
        return servicio.buscar(nombre);
    }
    @RequestMapping(value = "/agregar", method = RequestMethod.POST)
    public Libro crear(@RequestBody Libro libro) {
        return servicio.guardar(libro);
    }

    @RequestMapping(value = "/modificar", method = RequestMethod.PUT)
    public Libro actualizar(@RequestBody Libro libro) {
        if (servicio.obtener(libro.getIdlibro()) != null) {
            return servicio.guardar(libro);
        } else {
            return null;
        }
    }

    @RequestMapping(value = "/eliminar/{id}", method = RequestMethod.DELETE)
    public boolean eliminar(@PathVariable long id) {
        return servicio.eliminar(id);
    }

}


