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
      this.hungry = false;
    }
  }

  eat(victim) {
    if(this.human == true){
      return "You are a human";
    } else {
      victim.alive = false;
      if(this.hungry == true && victim.alive == false){
        this.hungry = false;
        this.human = true;
      }
    }
  }

}

module.exports = Werewolf;