class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  change() {
    if(this.human) {
      this.human = false;
      this.wolf = true;
      this.hungry = true;
    } else {
      this.human = true;
      this.wolf = false;
    }
  }

  eat(victim) {
    victim.alive = false;
  }

}

module.exports = Werewolf;