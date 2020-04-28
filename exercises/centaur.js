class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.counter = 0;
  }

  shoot() {
    this.counter ++;
    return "Twang!!!"
  }

  run() {
    this.counter ++;
    return "Clop clop clop clop!!!"
  }

  cranky() {
    if(this.counter > 2) {
      this.cranky = true;
    }
  }
}

module.exports = Centaur;