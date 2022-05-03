//https://github.com/lydiahallie/javascript-questions
// questions that i was not able to do
// 5

const person = {
  name: "yadnesh",
};

let printName = function (age, country, state) {
  console.log(this.name + " age is " + age + country + state);
};

// const printAllFuncInbuilt = printName.bind(person, 24, "India", "Maha");

// printAllFuncInbuilt();

Function.prototype.myBind = function (...args) {
  const thisContext = this; //this keyword here refers to the function which is calling our bind method so in our case on line 13 printName means the this keyword

  //args2 is needed because there is a chance that the user is providing some args

  const params = args.slice(1);
  return function (...args2) {
    thisContext.apply(args[0], [...params, ...args2]);
  };
};

Function.prototype.myBind2 = function (...args) {
  const params = args.slice(1);
  return function (...args2) {
    this.apply(args[0], [...params]);
  };
};

const printAllFuncmyFunc = printName.myBind(person, 24, "India", "Maha");

printAllFuncmyFunc();
