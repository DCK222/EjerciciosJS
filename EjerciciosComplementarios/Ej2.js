// 2. Escribe un programa con herencia de clases que permita modelar los objetos Teléfono, Fijo y Móvil, de maneraque Teléfono sea la clase madre y Fijo y Móvil, clases heredadas.

class Telefono {
    constructor(marca, modelo, CPU, RAM, almacenamiento, ancho, alto) {
        this.marca = marca;
        this.modelo = modelo;
        this.CPU = CPU;
        this.RAM = RAM;
        this.almacenamiento = almacenamiento;
        this.ancho = ancho;
        this.alto = alto;
    }
    infoTelefono() {
        return `Teléfono móvil: ${this.marca} ${this.modelo}, CPU-${this.CPU}, RAM-${this.RAM}, Almacenamiento-${this.almacenamiento}, Ancho-${this.ancho}, Alto-${this.alto}`;
    }
}

class Fijo extends Telefono {
    constructor(marca, modelo, linea_principal, linea_fija, linea_por_cable) {
        super(marca, modelo, null, null, null, null, null); // Pasamos null para los parámetros no aplicables
        this.linea_principal = linea_principal;
        this.linea_fija = linea_fija;
        this.linea_por_cable = linea_por_cable;
    }
    infoFijo() {
        return `Línea Fija: ${this.linea_principal}, Línea Fija: ${this.linea_fija}, Línea por Cable: ${this.linea_por_cable}`;
    }
}

class Movil extends Telefono {
    constructor(marca, modelo, CPU, RAM, almacenamiento, ancho, alto, esDualSIM, tamañoPantalla) {
        super(marca, modelo, CPU, RAM, almacenamiento, ancho, alto);
        this.esDualSIM = esDualSIM;
        this.tamañoPantalla = tamañoPantalla;
    }
    infoMovil() {
        return `${this.infoTelefono()}, Dual SIM: ${this.esDualSIM}, Tamaño de Pantalla: ${this.tamañoPantalla}"`;
    }
}

let samsungGalaxyA54 = new Movil("Samsung", "Galaxy A54 5G", "Exynos 1280", "6GB", "128GB", "74.8", "158.9", true, "6.5");
let alcatelFijo = new Fijo("Alcatel", "ModeloFijo", "545166565", "4784494694", "No tiene");

console.log(samsungGalaxyA54.infoMovil());
console.log(`-----------------------------------------------------------------------------------------------------------------`)
console.log(alcatelFijo.infoFijo());