package apibiblio.apibiblio.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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
}


