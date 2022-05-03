const arr = [1, 2, 3, 4];

const ansReduce = arr.reduce((result, current) => {
  return result + current;
}, 100);

console.log(ansReduce);

const ansMyReduce = arr.myReduce((result, current) => {
  return result + current;
}, 100);

console.log(ansMyReduce);

Array.prototype.myReduce = function(callback, initialValue){
if (this == null) { throw new TypeError('Array.prototype.myReduce called on null or undefined'); }
  let result = initialValue;
  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

const ansMap = arr.map((current) => {
  return current * 100;
});

console.log(ansMap);

Array.prototype.myMap = function (callback) {
if (this == null) { throw new TypeError('Array.prototype.myMap called on null or undefined'); }
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
const ansMyMap = arr.myMap((current) => {
  return current * 100;
});

console.log(ansMyMap);

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push(this[i]);
  }
  return result;
};
const ansMyFilter = arr.myFilter((current) => {
  return (current & 1) !== 0;
});

console.log(ansMyFilter);

console.log(
  arr.find((element) => {
    return element === 2;
  })
);

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};
console.log(arr.myFind((current)=>{
  return current === 2;
}))
