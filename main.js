const Store = require('./store');
const Ispis = require('./ispis');
const Questions = require('./questions');

const ourStore = new Store()
const ispis = new Ispis(ourStore)
const questions = new Questions(ourStore)

//Pitanja za garaže:
ourStore.brojGaraza  = questions.brojGaraza();
//ourStore.addGarazaToStore(ourStore.brojGaraza); //i onda je tu razlika hocemo li zvati metodu ovako sa parametrom ili 
ourStore.addGarazaToStore() // ili ovako bez parametra jer ce uzeti sama this.brojGaraza
questions.aboutGaraza();

//Pitanja za predmete:
ourStore.brojPredmeta = questions.brojPredmeta();
ourStore.addPredmetToStore(); //napunimo array sa predmetima svako ime predmeta je redni broj
questions.garazaUkojSpadaPredmet();
questions.aboutPredmet();
ourStore.addPredmetToGaraza() //sa ovim dodajem predmete u pripadajuće garaže

ispis.ispisivanje(ourStore)



