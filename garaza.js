module.exports = class Garaza {
  constructor (ime) {
    this._ime = ime + '.'
    this._velicina = '';
    this._lokacija = '';
    this._automatic = '';
    this._predmetiUGarazi = [];
  }
  //getters:
  get ime() {
    return this._ime;
  }
  get velicina() {
    return this._velicina;
  }
  get lokacija() {
    return this._lokacija;
  }
  get automatic() {
    return this._automatic
  }
  get predmetiUGarazi() {
    return this._predmetiUGarazi;
  }

  //setters:
  //setter za _predmetiUGarazi nije potreban jer kasnije array punimo methodom push a ne sa pozivom
  //sa novim parametrima, tako da je zapravo pozovemo sa get metodom i onda pushamo iteme u array
  set ime(newIme) {
    this._ime = newIme;
  }
  set velicina(newSize) {
    this._velicina = newSize;
  }
  set lokacija(newLokacija) {
    this._lokacija = newLokacija;
  }
  set automatic(newAutomatic) {
    this._automatic = newAutomatic;
  }
  

  ispisPredmeta () {
    let naziviIVrijednosti = [];
    for (let i = 0; i < this.predmetiUGarazi.length; i++) {
      naziviIVrijednosti.push(` ${this.predmetiUGarazi[i].naziv} sa vrijednosti ${this.predmetiUGarazi[i].vrijednost}`)
    }
    return naziviIVrijednosti;
}
}