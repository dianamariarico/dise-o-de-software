package apibiblio.apibiblio.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import apibiblio.apibiblio.modelos.Usuario;
import apibiblio.apibiblio.repositorios.UsuarioRepositorio;
import apibiblio.apibiblio.interfaces.IUsuarioServicio;

public class UsuarioServicio implements IUsuarioServicio{
    @Autowired
    UsuarioRepositorio repositorio; 
    
    @Override
    public List<Usuario> listar() {
        return repositorio.findAll();
    }
    @Override
    public Usuario guardar(Usuario usuario) {
        return repositorio.save(usuario);
    }

    public Usuario obtener(Long id) {
        var usuario = repositorio.findById(id);
        return usuario.isEmpty() ? null : usuario.get();
    }

    @Override
    public boolean eliminar(Long id) {
        try {
            repositorio.deleteById(id);
            return true;
        } catch (Exception ex) {
            return false;
        }
    }
}

