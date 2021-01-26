'use strict'

var table = document.getElementById('table');

Car.prototype.allCars = [];

function Car() {
    this.carName = carName;
    this.cateModel = cateModel;
    this.carYear = carYear;
    Car.prototype.allCars.push(this);

}
if (localStorage.getItem('carObjects')) {

    lsArray = JSON.parse(localStorage.getItem('carObjects'));
    for (var i = 0; i < lsArray.length; i++) {

        new Car(lsArray.carName, lsArray.cateModel, lsArray.carYear);

    }
}

Car.prototype.render = function () {
    var dataRow = document.createElement('tr');
    table.appendChild(dataRow);

    var carName = document.createElement('td');
    carName.textContent = this.carName;
    dataRow.appendChild(carName);


    var cateModel = document.createElement('td');
    cateModel.textContent = this.cateModel;
    dataRow.appendChild(cateModel);

    var carYear = document.createElement('td');
    carYear.textContent = this.carYear;
    dataRow.appendChild(carYear);
}


var form1 = document.getElementById('form1');

form1.addEventListener('submit', addCar);


function addCar(event) {

    event.preventDefault();

    var carNameValue = event.target.carName.value;
    var cateModelValue = event.target.cateModel.value;
    var carYearValue = event.target.carYear.value;

    var userInput = new Car(carNameValue, cateModelValue, carYearValue);
    userInput.render();


    localStorage.setItem('carObjects', JSON.stringify(Car.prototype.allCars));
}






