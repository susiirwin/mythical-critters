class Person {
  constructor(name) {
    this.name = name;
    this.stoned = false;
  }

  hit(){
    this.stoned = true;
  }
}



module.exports = Person;