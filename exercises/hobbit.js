class Hobbit {
  constructor(name = "Bilbo", disposition = "homebody", age = 0) {
    this.name = name;
    this.disposition = disposition;
    this.age = age;
    this.adult = false;
    this.child = false;
    this.old = false;
    this.isShort = true;
    this.hasRing = false;
    if(this.name == "Frodo") {
      this.hasRing = true;
    }
  }

  celebrateBirthday() {
    this.age ++;
    if (this.age <= 32) {
      this.child = true;
    } else if (this.age >= 33 && this.age <= 100) {
      this.adult = true;
    } else if (this.age >= 101) {
      this.old = true;
    }
  }

 
}

module.exports = Hobbit;