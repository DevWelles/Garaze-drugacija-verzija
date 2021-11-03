const prompt = require('prompt-sync')({sigint: true});

module.exports = class Questions {
  constructor(store) {
    this.store = store
  }

  //ova prva mi ne radi dobro jer ponovnim pozivom this.brojGarazaa bude rekurzivno i onda samo naslaže na stack return vrijednosti(first in first out) i uzme prvu(koaj je bila kriva) jer tako rade rekurzije
  // brojGaraza () {
  //   const userInput = Number(prompt('Unesite broj garaza(N): '));
  //   if (isNaN(userInput) || userInput == ' ') {
  //     console.log('Molimo ispravno unesite broj!')
  //     console.log(typeof userInput)
  //     this.brojGaraza();
  // } 
  //   console.log(userInput)
  //   return userInput; 
  // }


  // Ako je izmjenim na ovaj način da bude while loop onda kod nikad ne krene dalje dok se ne zadovolji while loop
  // ali moram staviti ponovni prompt na let varijablu userInput, jer ako stavim da ponovno zove this.brojGaraza() stvori se infinit while loop
  //mislim da mi ova najbolje radi jer najmanje vremena troši pošto vrti samo while loop a ne ponovne pozive funkcije
  brojGaraza () {
    let userInput = Number(prompt('Unesite broj garaza(N): '));
    while (isNaN(userInput) || userInput == ' ' || userInput <= 0) {
      console.log('Molimo ispravno unesite broj!')
      console.log(typeof userInput)
      userInput = Number(prompt('Unesite broj garaza(N): '));
  } 
    console.log(userInput)
    return userInput; 
  }

  //Ako koristim store instancu
  //ova mi radi sa if statementom rekurzivnim pozivom this.brojGaraza mislim da zato sto svaki put seta this.brojGaraza
  //jer u consol.log vidim da izvrti sve prompte samo zadane sa zadnjom vrijednosti koja je bila ispravna
  
//   brojGaraza () {
//   this.store.brojGaraza = Number(prompt('Unesite broj garaza(N): '));
//   if (isNaN(this.store.brojGaraza) || this.store.brojGaraza == ' ') {
//     console.log('Molimo ispravno unesite broj!')
//     console.log(typeof this.store.brojGaraza)
//     this.brojGaraza();
//   } 
//     console.log(this.store.brojGaraza)
//     return this.store.brojGaraza;
// }



aboutGaraza () {
  this.store.garaze.map(garaza => {
    garaza.velicina = prompt(`Unesite veličinu garaže ${garaza.ime} `);
    garaza.lokacija = prompt(`Unesite lokaciju garaze ${garaza.ime} `);
    garaza.automatic = prompt(`Jesu li vrata automatska? DA/NE `); //Popunjavam ove parametre za svaki objekt Garaže u listi garaze od storea
  }); //Pitanje za Prtu, kako napraviti da napravim sve da bude u jednom promptu a ne ovako svaka varijabla jedan prompt?
  
}

brojPredmeta () {
  let userInput = Number(prompt('Unesite broj predmeta(M): '));
  if(userInput == 0){
    return
  }
  while (isNaN(userInput) || userInput == ' ' || userInput < 0) {
    console.log('Molimo ispravno unesite broj!')
    console.log(typeof userInput)
    userInput = Number(prompt('Unesite broj predmeta(M): '));
    if(userInput == 0){
      break
    }
} 
  console.log(userInput)
  return userInput; 
};

garazaUkojSpadaPredmet () {
  this.store.predmeti.map(predmet => {
    let userInput = Number(prompt(`Unesite redni broj garaže u koju spada ${predmet.ime} predmet: ` ))
    while (isNaN(userInput) || userInput == ' ' || userInput > this.store.brojGaraza || userInput <= 0) {
      console.log('Molimo ispravno unesite broj pripadajuće garaže!')
      console.log(typeof userInput)
      userInput = Number(prompt(`Unesite redni broj garaže u koju spada ${predmet.ime} predmet: ` ));
  } 
    console.log(userInput)
    predmet.uGarazi = userInput
  })
}

aboutPredmet() {
  this.store.predmeti.map(predmet => {
    predmet.naziv = prompt(`Unesite naziv ${predmet.ime} predmeta: `);
    predmet.vrijednost = prompt (`Unesite vrijednost ${predmet.ime} predmeta: ` );
  });
};
}