class clubFutbol {
    constructor(añoFundacion = 'nodefinido', numSocios = 0, nombreEstadio = 'nodefinido', ciudad = 'nodefinida', palmares = ''){
        this.añoFundacion = añoFundacion;
        this.numSocios = numSocios;
        this.nombreEstadio = nombreEstadio;
        this.ciudad = ciudad;
        this.palmares = palmares;
    }

    verClub(){
        return ` El club de futbol fue fundado el ${this.añoFundacion}, tiene ${this.numSocios}, su estadio se llama ${this.nombreEstadio} , esta en la ciudad ${this.ciudad} y sus palmares son ${this.palmares}`
    }
}
let club1 = new clubFutbol();
let club2 = new clubFutbol(1902);
let club3 = new clubFutbol(1902, 100000);
let club4 = new clubFutbol(1902, 100000, 'Santiago Bernabéu');
let club5 = new clubFutbol(1902, 100000, 'Santiago Bernabéu', 'Madrid');
let club6 = new clubFutbol(1902, 100000, 'Santiago Bernabéu', 'Madrid', 'Liga 2023/2024, Champions League 2023/24');

// MOSTRAMOS TODOS LOS CLUBES
console.log(club1.verClub());
console.log(club2.verClub());
console.log(club3.verClub());
console.log(club4.verClub());
console.log(club5.verClub());
console.log(club6.verClub());

console.log('----------------------------------------------------------------------------------------------------------');
// HACEMOS ALGUNAS MODIFICACION
club4.añoFundacion = 1899;
console.log(club4.verClub());

club5.numSocios = 50000;
console.log(club5.verClub());
