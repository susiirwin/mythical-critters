class Unicorn {
  constructor(name = "Bree", color = "white", phrase) {
    this.name = name;
    this.color = color;
    this.phrase = phrase;
  }

  isWhite() {
    return false;
  }

  says(phrase) {
    return `**;* ${phrase} *;**`
  }
}

module.exports = Unicorn;
