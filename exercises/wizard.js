class Wizard {
  constructor(object, bearded = true) {
    this.name = object.name;
    this.bearded = object.bearded;
  }
}

module.exports = Wizard;