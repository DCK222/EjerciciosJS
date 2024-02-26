class vehiculo {
    // CREAMOS EL CONSTRUCTOR DE LOS VEHICULOS
    constructor(marca, modelo, ruedas, cv, peso, combustible){
        this.marca = marca;
        this.modelo = modelo;
        this.ruedas = ruedas;
        this.cv = cv;
        this.peso = peso;
        this.combustible = combustible;
    }
 
    // FUNCION VEHICULO ACELERA
    acelerar(){
        console.log(`Vehiculo Acelerando `);
    }
    
    // FUNCION VEHICULO FRENA
    frenar(){
        console.log('Vehiculo Frenando');
    }
    
    // CREAMOS LA INFO PARA EL VAEHIULO
    info(){
        console.log(`Vehiculo :${this.marca} , ${this.modelo}, ${this.ruedas}, ${this.cv}`);
    }
}

// CREAMOS LA CLASE COCHE COMO PADRE VEHICULO
class coche extends vehiculo{
    // AÑADIMOS EL CONSTRUCTOR
    constructor(marca, modelo, ruedas, cv, peso , combustible, pantalla, puertas){
        // DATOS BASE DEL PADRE
        super(marca, modelo, ruedas, cv, peso, combustible);
        // AÑADIMOS CARACTERISTICAS DEL COCHE
        this.pantalla = pantalla;
        this.puertas = puertas;
    }
    
    info(){
        console.log(`Propiedades Coche : ${this.marca} , ${this.modelo}, ${this.ruedas}, ${this.cv} , ${this.peso} , ${this.combustible} , ${this.pantalla} , ${this.puertas} `);
    }
}

// CREAMOS LA CLASE PONIENDO COMO PADRE A VEHICULO
class moto extends vehiculo{
    // AÑADIMOS TODOS LOS DATOS
    constructor(marca, modelo, ruedas, cv, peso , combustible, cilindrada, tipo){
        // DATOS HEREDADOS DEL PADRE
        super(marca, modelo, ruedas, cv, peso, combustible);
        // AÑADIMOS PROPIEDADES DE LA MOTO
        this.cilindrada = cilindrada;
        this.tipo = tipo;
    }
    
    // CREAMOS LA FUNCION INFO PARA VER LAS PROPIEDADES DE LA MORO
    info(){
        console.log(`Propiedades Moto : ${this.marca} , ${this.modelo}, ${this.ruedas}, ${this.cv} , ${this.peso} , ${this.combustible} , ${this.cilindrada} , ${this.tipo} `);
    }
}

// CREAMOS LOS VEHICULOS
const Chevrolet = new coche("Chevrolet", "Aveo", 4, 130, 1100, "Gasolina", "Pantalla táctil", 5);
const Honda = new moto("Honda", "CBR600RR", 2, 100, 200, "Gasolina", "600cc", "Deportiva");
const Yahamaha = new moto("Yahamaha", "s2000", 2, 80, 300, "Gasolina", "600cc", "Deportiva");


// INFORMACION DE los vehiculos
console.log("Información Vehiculos");
Chevrolet.info();
Honda.info();
Chevrolet.acelerar();
Honda.frenar();




// Ej.4.-	RECORRIDOS CON HERENCIA. Utilizando los recorridos de un objeto, muestra todas las propiedades de los tres objetos creados en el ejercicio de HERENCIA Y POLIMORFISMO.
console.log("--------------------------------------------------------")
console.log("Propiedades : ");

// recorremos los datos de los vehiculos con un for
for (let datos in Chevrolet) {
    // añadiendo las valores con sus propiedades
    console.log(`Propiedades: ${datos} - Valor: ${Chevrolet[datos]}`);
}
console.log("---------------------------------------------------------");
for (let datos in Honda) {
    console.log(`Propiedad de Honda: ${datos} - Valor: ${Honda[datos]}`);
}
console.log("---------------------------------------------------------");
for (let datos in Yahamaha) {
    console.log(`Propiedad de Honda: ${datos} - Valor: ${Honda[datos]}`);
}

console.log(" Fin Recorridos de los vehiculos");
console.log("---------------------------------------------------------");