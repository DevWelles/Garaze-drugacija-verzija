module.exports = class Ispis{
  constructor(store) {
    this._store = store;
  }

  get store(){
    return this._store
  }

  ispisPredmeta() { //dohvatim pojedine predmete iz pripadajuće garaže i returnam njihov naziv i vrijednost
    let naziv;      //ali ne radi pravilno, vrati mi samo zadnje unesen predmet
    let vrijednost; //zato sam prebacio metodu da bude unutar clase garaža
    this.store.garaze.map(garaza => {
      garaza.predmetiUGarazi.map(predmet => {
        naziv = predmet.naziv;
        vrijednost = predmet.vrijednost;
      })
      })
      return `${naziv} sa vrijednošću ${vrijednost}`
    }

  ispisivanje() {
    this.store.garaze.forEach(garaza => {
      console.log(`${garaza.ime} garaža se nalazi na lokaciji "${garaza.lokacija}" njezina veličina
       je "${garaza.velicina}" i ${garaza.automatic} posjeduje automatska vrata. Garaža sadrži
        ${garaza.predmetiUGarazi.length} predmet(a). Predmeti su${garaza.ispisPredmeta()}`)
    })
  }
}