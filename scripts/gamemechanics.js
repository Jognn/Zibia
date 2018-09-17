class Kurna {
  constructor () {
    this.a = 10
  }
}

let kurna = new Kurna();

class DrugaKurna {
  constructor() {
    console.log(kurna.a);
  }
}
let dk = new DrugaKurna();
