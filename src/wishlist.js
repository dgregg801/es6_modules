import Car from "./car.js";

export class WishList {
  constructor() {
    this.list = [];
    this.nextId = 0;
  }
}

const example = add(make, model, year)
{
  const car = new Car(++this.nextId, make, model, year);

  this.list.push(Car);
}

remove(carId)
{
  this.list = this.list.filter((car) => car.id !== carId);
}
