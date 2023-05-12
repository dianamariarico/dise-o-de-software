package apibiblio.apibiblio.interfaces;

import java.util.List;


import apibiblio.apibiblio.modelos.Usuario;

public interface IUsuarioServicio {

    public List<Usuario> listar();

    public Usuario obtener(Long idUsuario);

    public Usuario guardar(Usuario usuario);

    public boolean eliminar(Long idusuario);

    
}
