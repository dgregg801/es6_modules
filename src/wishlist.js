import Car from "./car.js";

class WishList {
  constructor() {
    this.list = [];
    this.nextId = 0;
  }

  add(make, model, year) {
    const freshCar = new Car(++this.nextId, make, model, year);

    this.list.push(freshCar);
  }

  remove(carId) {
    //Find and remove a specific element in an array
    this.list = this.list.filter((car) => {
      return car.id != carId;
    });
  }
}

export default WishList;
