//actions
function swimmer({ name }) {
  return {
    swim: () => {
      console.log(`${name} swam`);
    },
  };
}
function flier({ name }) {
  return {
    fly: () => {
      console.log(`${name} flew`);
    },
  };
}
function runner({ name }) {
  return {
    run: () => {
      console.log(`${name} ran`);
    },
  };
}
//object creators
function swimmerCreator({ name }) {
  const person = { name: name };

  return {
    ...person,
    ...swimmer(person),
  };
}
function flyCreator({ name }) {
  const person = { name: name };

  return {
    ...person,
    ...flier(person),
  };
}

function runCreator({ name }) {
  const person = { name: name };
  return {
    ...person,
    ...runner(person),
  };
}

function swimAndFlyCreator({ name }) {
  const person = { name };
  return {
    ...person,
    ...swimmer(person),
    ...flier(person),
  };
}
//instances
const person = swimmerCreator({
  name: "yadnesh",
  age: 24,
});

person.swim();

console.log(person);

const person1 = flyCreator({
  name: "yadnesh1",
  age: 241,
});

person1.fly();

console.log(person1);

const person2 = swimAndFlyCreator({
  name: "yadnesh2",
  age: 242,
});

person2.fly();
person2.swim();

console.log(person2);

const person3 = runCreator({
  name: "yadnesh",
});

person3.run();