const Garaza = require('./garaza')
const Predmet = require('./predmet')
//store će sadržavati sve objekte garaža u jednoj listi
//user navede broj garaža i onda ja popunim tu listu sa objektima garaža i svakoj dam ime po broju

module.exports = class Store {
  constructor() {
    this._brojGaraza = 0;
    this._garaze = [];
    this._brojPredmeta = 0;
    this._predmeti = [];
  }
  //getters:
  get brojGaraza() {
    return this._brojGaraza
  }
  get garaze() {
    return this._garaze;
  }
  get brojPredmeta() {
    return this._brojPredmeta
  }
  get predmeti () {
    return this._predmeti
  }
  //setters:
  //setersi za _garaze i _predmeti nam ne tribeaju jer ih punimo metodom push
  //pa ih zapravo pozovemo sa get i onda napunimo sa push
  set brojGaraza(userInputBroj) {
    this._brojGaraza = userInputBroj; //ovo se pozove kad user na promptu u main fileu upiše broj garaža(M)
  }
  set brojPredmeta(newNum) {
    this._brojPredmeta = newNum //ovo se pozove kad user na promptu u main fileu upiše broj predmeta(M)
  }
  
  addGarazaToStore (brojGaraza) {               //da li je bolje ovu funkciju napisati ovako sa parametrom 
    for (let i = 1; i<brojGaraza+1; i++ ) {
      this.garaze.push(new Garaza(i)) 
    }
  }

  addGarazaToStore() {                          // ili bez parametra nego da direktno uzme property this.brojgaraza
    for (let i = 1; i<this.brojGaraza+1; i++ ) { //i onda ovisno kako cemo ju pozvati u main.js
      this.garaze.push(new Garaza(i)) 
    }
  }

  addPredmetToStore() {
    for (let i = 1; i<this.brojPredmeta+1; i++) {
      this.predmeti.push(new Predmet(i))
    }
  }

  addPredmetToGaraza () { //dodaje predmet u pripadajuću garažu
    for (let i = 0; i < this.predmeti.length; i++) {
      for (let j = 0; j < this.garaze.length; j++){
        if (this.predmeti[i].uGarazi == this.garaze[j].ime){
          this.garaze[j].predmetiUGarazi.push(this.predmeti[i])
        } 
      }
    }
  }
}