class character {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.image = data.image;
    this.rating = data.rating;
    this.lifePool = data.life;
  }
}

module.exports = character;
