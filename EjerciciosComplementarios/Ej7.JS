// 7.  Crea una clase película que permita gestionar esta información: nombre de la película, año de estreno, duración,género, los seis actores o actrices más principales, 
// la URL de su cartel promocional y su director. Una acción que permitamostrar en consola toda la información. EL constructor recibirá los datos en una cadena JSON de la 
// que deberá sacar losvalores de cada propiedad. Crea un objeto de la clase y ponla a prueba.

class pelicula {
    constructor(nombrePelicula, añoEstreno, duracion, genero, actor1, actor2, actor3, actor4, actor5, actor6, url, director) {
        this.nombrePelicula = nombrePelicula;
        this.añoEstreno = añoEstreno;
        this.duracion = duracion; // Podría estar en minutos o en formato 'hh:mm'
        this.genero = genero;
        this.actores = [actor1, actor2, actor3, actor4, actor5, actor6]; // Agrupar en un arreglo para simplificar
        this.url = url; // Suponemos que es una URL para ver la película o para más información sobre ella
        this.director = director;
    }

    // Método para mostrar información básica de la película
    info() {
        return `Película: ${this.nombrePelicula}\nEstreno: ${this.añoEstreno}\nDuración: ${this.duracion} minutos\nGénero: ${this.genero}\nDirector: ${this.director}\nActores Principales: ${this.actores.slice(0, 3).join(', ')}\nMás Información: ${this.url}`;
    }
}

let starWars = new pelicula(
    "Star Wars: Episodio IV - Una nueva esperanza", // nombrePelicula
    1977, // añoEstreno
    121, // duracion en minutos
    "Ciencia ficción", // genero
    "Mark Hamill", // actor1
    "Harrison Ford", // actor2
    "Carrie Fisher", // actor3
    "Alec Guinness", // actor4
    "Peter Cushing", // actor5
    "Anthony Daniels", // actor6
    "https://www.starwars.com", // URL para más información
    "George Lucas" // director
);

console.log(starWars.info()); // Esto imprimirá la información de la película
