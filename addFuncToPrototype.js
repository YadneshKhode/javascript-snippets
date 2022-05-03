function Vehicle(make, model, year, isRunning = false) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = isRunning;
}

const hyundai = new Vehicle(2012, "xcent", 2021);

Vehicle.prototype.turnOn = function () {
  this.isRunning = true;
};
Vehicle.prototype.turnOff = function () {
  this.isRunning = false;
};

Vehicle.prototype.honk = function () {
  if (this.isRunning) {
    return "beep";
  }
};

console.log(hyundai);
hyundai.turnOn();
console.log(hyundai);
console.log(hyundai.honk());

hyundai.turnOff();
console.log(hyundai);
console.log(hyundai.honk());



