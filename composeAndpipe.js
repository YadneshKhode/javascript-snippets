
const multiply = (x) => {
    return x * 5;
  };
  
  const add5 = (x) => {
    return +x + 5;
  };
  // execute functions from back to front order
  const compose = (...funs) => {
    let result;
  
    return (...args) => {
      for (let i = funs.length - 1; i >= 0; i--) {
        result = i === funs.length - 1 ? funs[i](...args) : funs[i](result);
      }
      return result;
    };
  };
  
  // execute functions from front to back order
  
  const pipe = (...funs) => {
      let result;
    
      return (...args) => {
        for (let i = 0; i < funs.length; i++) {
          result = i === 0 ? funs[i](...args) : funs[i](result);
        }
        return result;
      };
    };
    
    const composeReduce = (...funcs) => {
      return (x) => {
        return funcs.reduceRight((accumulator, currentFunc) => {
          return currentFunc(accumulator);
        }, x);
      };
    };
    
    const pipeReduce = (...funcs) => {
      return (x) => {
        return funcs.reduceRight((accumulator, currentFunc) => {
          return currentFunc(accumulator);
        }, x);
      };
    };
  
  const composedFunctions = compose(add5, multiply);
  
  console.log(composedFunctions(10));
  