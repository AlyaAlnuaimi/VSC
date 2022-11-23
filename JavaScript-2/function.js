function y(x) {
    let z = x ** 2 + 6;
    return z;
  }
  // y(5);
  // let result = y(5);
  
  function calculateTax(val) {
    return val * 0.14;
  }
  
  function calculateTotal(val) {
    return val + calculateTax(val);
  }
  
  console.log(calculateTotal(1000));
  //Functions return nothing
  //Functions return Values
  //////////////////////////////////
  const calculateTax2 = function (val) {
    return val * 0.14;
  };
  
  //Arrow function
  const calculateTax3 = (val) => {
    return val * 0.14;
  };
  
  const calculateTax4 = (val) => val * 0.14;
  
  const add = (...arr) => {
    let total = 0;
    for (let a of arr) {
      total += a;
    }
    return total;
  };
  
  const add1 = (...arr) => {
    console.log(arr);
  };