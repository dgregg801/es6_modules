console.log("Hello World");

// TODO
import WishList from "./wishlist.js";

const form = document.getElementById("submitForm");
const carMakeInput = document.getElementById("makeInput");
const carModelInput = document.getElementById("modelInput");
const carYearInput = document.getElementById("yearInput");
const removeBtn = document.querySelector(".removeBtn");
const ulElement = document.querySelector("#wishListContainer > ul");
const carMakeDisplay = document.getElementById("car-make");
const carModelDisplay = document.getElementById("car-model");
const carYearDisplay = document.getElementById("car-year");
//const firstElement = removeBtn[0];
//console.log (firstElement);

console.log(removeBtn);

const newWishList = new WishList();



form.addEventListener("submit", addCar);

removeBtn.addEventListener("click", removeCar);

function showCarDetails(car) {
  carMakeDisplay.textContent = car.make;
  carModelDisplay.textContent = car.model;
  carYearDisplay.textContent = car.year;

  removeBtn.disabled = false;
  removeBtn.setAttribute("data-carId", car.id);
}

function updateDomList() {
  ulElement.innerHTML = "";

  newWishList.list.forEach((element, index, array) => {
    const li = document.createElement("li");
    li.textContent = `${element.make} ${element.model}`;
    li.addEventListener("click", () => {
      showCarDetails(element);
    });

    ulElement.append(li);
  });
}

/*function updateDomList() {
    ulElement.innerHTML = "";
    for (let i = 0; i < newWishList.list.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${car.make} ${car.model}`;
        li.addEventListener("click", () => {
            showCarDetails(newWishList));
        ulElement.appendChild(li);
    };
}
*/

//Handling some event that will add a car to the list and update the DOM
function addCar(event) {
  event.preventDefault();
  newWishList.add(carMakeInput.value, carModelInput.value, carYearInput.value);
  updateDomList();
}

function removeCar() {
  let carId = Number(removeBtn.getAttribute("data-carId"));
  newWishList.remove(carId);
  updateDomList();

  carMakeDisplay.textContent = "";
  carModelDisplay.textContent = "";
  carYearDisplay.textContent = "";
  removeBtn.disabled = true;
}
