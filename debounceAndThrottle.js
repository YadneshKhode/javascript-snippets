function throttle(inputFunc, delay) {
  let lastTime = 0;
  return (...args) => {
    const current = new Date().getTime();
    if (current - lastTime < delay) {
      return;
    }
    lastTime = current;
    return inputFunc(...args);
  };
}

const debounce = (fn, delay) => {
  let clearId;
  return function (...args) {
    if (clearId) {
      clearTimeout(clearId);
    }
    clearId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
// wrote below in paytm interview
function debounce(delay, fn, ...args) {
  let clearId;
  return (...args2) => {
    if (clearId) {
      clearTimeout(clearId);
    }
    clearId = setTimeout(() => {
      return fn(...[...args, ...args2]);
    }, delay);
  };
}




