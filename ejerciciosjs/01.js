//Ejercicio 1
function multiplyAll(array) {
  return function (x) {
    let sum = 0;
    array.map((num) => (sum += num * x));
    return sum;
  };
}

// console.log(multiplyAll([1, 2, 3])(2));

//Ejercicio 2
function flatArray(array) {
  return array.reduce((acc, currentvalue) => [...acc, ...currentvalue], []);
}

const result = flatArray([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]);

function sort(arrayOfValues) {
    return arrayOfValues.reduce((arrayAcc, value) => {
      console.log(index)
    let index = 0;
    while (index < arrayOfValues.length && value > arrayOfValues[index]) {
      console.log({ value, arrayIndex: arrayOfValues[index] });
      index++;
    }
    console.log('sale');
    arrayAcc.splice(index, 0, value);
    console.log(arrayAcc);
    return arrayAcc;
  }, []);
}
