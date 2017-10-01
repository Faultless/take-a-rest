// @flow

type Rating = 0 | 1 | 2 | 3 | 4 | 5;

type Character = {
  id: number,
  name: string,
  description: string,
  image: string,
  rating: Rating,
  life: number,
};

class character {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  lifePool: number;
  constructor(data: Character) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.image = data.image;
    this.rating = data.rating;
    this.lifePool = data.life;
  }
}

module.exports = character;
