// Ej.3.- CONSTRUCTORES. Crea una clase para modelar un objeto teléfono móvil que tenga al menos las siguientespropiedades: CPU, RAM, Almacenamiento, Ancho, Alto y número de 
// cámaras. Añade también in método llamadotoString() que muestre en la pantalla la información del objeto creado. Crea cuatro objetos con distintos números deparámetros en la 
// creación y muestra en pantalla la información de cada objeto.
class telefono {
    // CREAMOS EL CONSTRUCTOR DEL MOVIL
    constructor(marca, modelo, CPU, RAM, almacenamiento, ancho, alto, numCamaras){
        this.marca = marca;
        this.modelo = modelo;
        this.CPU = CPU;
        this.RAM = RAM;
        this.almacenamiento = almacenamiento;
        this.ancho = ancho;
        this.alto = alto;
        this.numCamaras = numCamaras;
    }

  

    // Método toString para mostrar información del objeto
    toString() {
        return `Teléfono móvil: ${this.marca} ${this.modelo}, CPU-${this.CPU}, RAM-${this.RAM}, Almacenamiento-${this.almacenamiento}, Ancho-${this.ancho}, Alto-${this.alto}, Cámaras-${this.numCamaras}`;
    }
}

// CREAMOS LOS MOVILES
const samsungA54_5g = new telefono("Samsung", "A54 5G", "Snapdragon 750G", "6GB", "128GB", "6.5 pulgadas", "12 pulgadas", 4);
const iphone14 = new telefono("Apple", "iPhone 14", "A15 Bionic", "6GB", "128GB", "5.7 pulgadas", "11.9 pulgadas", 3);
const samsungS24 = new telefono("Samsung", "S24", "Exynos 2200", "8GB", "256GB", "6.8 pulgadas", "13.5 pulgadas", 5);
const xiaomiPoco = new telefono("Xiaomi", "Poco", "Snapdragon 888", "12GB", "256GB", "6.6 pulgadas", "12.8 pulgadas", 4);


// LLAMAMOS A LOS MOVILES Y A LA FUNCION PARA VER SUS PROPIEDADES
console.log("----------------------------------------------------------------------------------------------------------------------------------");
console.log("Información de los teléfonos móviles:");
// AÑADIMOS EL TO STRING PARA QUE SALGA LOS 
console.log(samsungA54_5g.toString());
console.log(iphone14.toString());
console.log(samsungS24.toString());
console.log(xiaomiPoco.toString());
console.log("----------------------------------------------------------------------------------------------------------------------------------");
