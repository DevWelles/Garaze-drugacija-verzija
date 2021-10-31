module.exports = class Predmet {
  constructor(ime) {
    this._ime = ime + '.';
    this._naziv = '';
    this._vrijednost = '';
    this._uGarazi = 0;
  }

  //getters:
  get ime () {
    return this._ime;
  }
  get naziv() {
    return this._naziv;
  }
  get vrijednost() {
    return this._vrijednost;
  }
  get uGarazi() {
    return this._uGarazi;
  }
  //setters:
  set ime(newName) {
    this._ime = newName;
  }
  set naziv(newString) {
    this._naziv = newString;
  }
  set vrijednost(newString) {
    this._vrijednost = newString;
  }
  set uGarazi(newNumber) {
    this._uGarazi = newNumber;
  }
}
