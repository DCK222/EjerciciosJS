// 3. Diseña una jerarquía de clases donde Música y Tecnología sean clases derivadas de Aula, para modelar lasinstalaciones de un instituto de enseñanza secundaria. Elige un 
// método con el que evidenciar el concepto depolimorfismo. Razona en los comentarios del código tu respuesta.

class Aula {
    constructor(colegio, numAulas, numMesas, numSillas) {
        this.colegio = colegio;
        this.numAulas = numAulas;
        this.numMesas = numMesas;
        this.numSillas = numSillas;
    }

    infoAulas() {
        return `En el colegio ${this.colegio}, hay ${this.numAulas} aulas, cada aula contiene ${this.numMesas} mesas y ${this.numSillas} sillas.`;
    }
}

class AulaMusica extends Aula {
    constructor(colegio, numAulas, numMesas, numSillas, numInstrumentos, partituras) {
        super(colegio, numAulas, numMesas, numSillas);
        this.numInstrumentos = numInstrumentos;
        this.partituras = partituras;
    }

    infoAulaMusica() {
        return `${super.infoAulas()} En las clases de música hay ${this.numInstrumentos} instrumentos musicales y ${this.partituras} partituras.`;
    }
}

class AulaTecnologia extends Aula {
    constructor(colegio, numAulas, numMesas, numSillas, numOrdenadores, numTeclados, numRatones) {
        super(colegio, numAulas, numMesas, numSillas);
        this.numOrdenadores = numOrdenadores;
        this.numTeclados = numTeclados;
        this.numRatones = numRatones;
    }

    infoAulaTecnologia() {
        return `${super.infoAulas()} En las clases de tecnología hay ${this.numOrdenadores} ordenadores, ${this.numTeclados} teclados y ${this.numRatones} ratones.`;
    }
}

// Creando las instancias de aula de música y aula de tecnología
let aulaDeMusica = new AulaMusica("Ies Antonio Fraguas Forges", 1, 20, 20, 10, 30);
let aulaDeTecnologia = new AulaTecnologia("Ies Antonio Fraguas Forges", 1, 15, 15, 10, 10, 10);

console.log(aulaDeMusica.infoAulaMusica());
console.log(aulaDeTecnologia.infoAulaTecnologia());
