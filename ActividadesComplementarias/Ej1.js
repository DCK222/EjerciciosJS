// Ej.1.-	PRIMEROS OBJETOS. Crea un objeto usuario que permita autenticar a la persona que quiere iniciar sesión en el sistema.

// CREAMOS EL OBJETO USUARIO
const usuario = {
    Usuario: "Alegard",
    contraseña: "holalola",
  };
  
  // HACEMOS LA FUNCION DE VALIDAR CONTRASEÑA DONDE EL USUARIO Y LA CONTRASEÑA HAN DE CONINCIDIR
  // CON LOS DATOS DEL OBJETO 
  // PASAMOS DOS PARAMETROS USUARIO Y CONTRASEÑA
  function validarcontraseña(contraseñaintro, usuariointro) {
    // VALIDACION USUARIO CON CONTRAÑSE PARA QUE CORRESPONDA CON EL USUARIO
    if (contraseñaintro === usuario.contraseña && usuariointro === usuario.Usuario) {
      console.log(`Has entrado como... ${usuariointro}`);
    } else {
      console.log(`Algo ha Fallado =(`);
      console.log(`No se encuentra ${usuariointro} con esa contraseña `);
    }
  }
  
  // eJECUTAMOS LA FUNCION PASANDOLE POR PARAMETRO
  validarcontraseña("holalola", "Alegard");