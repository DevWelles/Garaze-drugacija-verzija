const Store = require('./store');
const Garaza = require('./garaza');
const Ispis = require('./ispis');
const Predmet = require('./predmet')
const prompt = require('prompt-sync')({sigint: true});

const ourStore = new Store()
const ispis = new Ispis(ourStore)

//Pitanja za garaže:

const brojGaraza = (store) => {
  store.brojGaraza = Number(prompt('Unesite broj garaza(N): '));
  if (isNaN(store.brojGaraza) || store.brojGaraza == ' ') {
    console.log('Molimo ispravno unesite broj!')
    console.log(typeof store.brojGaraza)
    brojGaraza(store);
  } 
    return store.brojGaraza;
}
brojGaraza(ourStore);
console.log(ourStore.brojGaraza);


// const brojGaraza = () => {
//   userInput = Number(prompt('Unesite broj garaza(N): '));
//   if(isNaN(userInput) || userInput == ' ') {
//     console.log('Molimo ispravno unesite broj!')
//     console.log(typeof userInput)
//     brojGaraza();
//   } return userInput; 
// };

// ourStore.brojGaraza = brojGaraza();
// console.log(ourStore.brojGaraza);



for (let i = 1; i<ourStore.brojGaraza+1; i++ ) {
  ourStore.garaze.push(new Garaza(i)) //za napuniti array instancama garaža da svaki this.ime bude zapravo broj od 1 na dalje
}

ourStore.garaze.map(garaza => {
  garaza.velicina = prompt(`Unesite veličinu garaže ${garaza.ime} `);
  garaza.lokacija = prompt(`Unesite lokaciju garaze ${garaza.ime} `);
  garaza.automatic = prompt(`Jesu li vrata automatska? DA/NE `); //Popunjavam ove parametre za svaki objekt Garaže u listi garaze od storea
}); //Pitanje za Prtu, kako napraviti da napravim sve da bude u jednom promptu a ne ovako svaka varijabla jedan prompt?


//Pitanja za predmete:
const brojPredmeta = Number(prompt('Unesite broj predmeta(M): '));
ourStore.brojPredmeta = brojPredmeta;

for (let i = 1; i<ourStore.brojPredmeta+1; i++) {
  ourStore.predmeti.push(new Predmet(i))
}

ourStore.predmeti.map(predmet => {
  predmet.uGarazi = Number(prompt(`Unesite redni broj garaže u koju spada ${predmet.ime} predmet: `));
  predmet.naziv = prompt('Unesite naziv predmeta: ');
  predmet.vrijednost = prompt ('Unesite vrijednost predmeta? ')
});

ourStore.addPredmetToGaraza() //sa ovim dodajem predmete u pripadajuće garaže


 ispis.ispisivanje(ourStore)



