// 1. Crea una clase con dos propiedades y dos métodos donde se evidencien los conceptos de abstracción yencapsulamiento de la POO. Razona en los comentarios del código 
// tu respuesta.

class Futbolista {
    // CONSTRUCTOR ABSTRACTO PARA LA CREACION DE UN JUGADOR
    constructor(nombre, apellidos, dorsal, nacionalidad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dorsal = dorsal;
        this.nacionalidad = nacionalidad;
    }

    info() {
        // USO DE 'this' PARA ACCEDER A LAS PROPIEDADES DEL OBJETO
        return `Futbolista ${this.nombre} ${this.apellidos}. Con el dorsal ${this.dorsal} y de nacionalidad ${this.nacionalidad}`;
    }

    marcagol() {
        // USO DE 'this' PARA ACCEDER A LAS PROPIEDADES DEL OBJETO
        return `Goooooooooooooooool !!!!!!!! deeeeeee ${this.nombre}`;
    }
}

let vinicius = new Futbolista("Vinicius", "Junior", 7, "Brasileña");
console.log(vinicius.marcagol());
console.log(vinicius.info());