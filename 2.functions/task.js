function getArrayParams(...arr) {
  let min = Infinity; 
  let max = -Infinity; 
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    if (currentElement < min) {
      min = currentElement;
    }
    if (currentElement > max) {
      max = currentElement;
    }

    sum += currentElement;
  }

  const average = (sum / arr.length).toFixed(2); 
  return {
    min: Number(min),
    max: Number(max), 
    avg: Number(average), 
  };
}

const myArray = [4, 8, 2, 5, 1];
const arrayParams = getArrayParams(...myArray);
console.log(arrayParams);



  function summElementsWorker(...arr) {
    if (arr.length === 0) {
      return 0; 
    }

    const sum = arr.reduce((acc, curr) => acc + curr);

    return sum;
  }

    function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
      return 0;
    }

    const max = Math.max(...arr);
    const min = Math.min(...arr);

    return max - min;
  }
    function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) {
      return 0;
    }

    let sumEvenElements = 0;
    let sumOddElements = 0;

    for (let i = 0; i < arr.length; i++) {
      const currentElement = arr[i];

      if (currentElement % 2 === 0) {
        sumEvenElements += currentElement;
      } else {
        sumOddElements += currentElement;
      }
    }
    return sumEvenElements - sumOddElements;
  }

  function averageEvenElementsWorker(...arr) {

    if (arr.length === 0) {
      return 0;
    }

    let sumEvenElements = 0;
    let countEvenElements = 0;
    for (let i = 0; i < arr.length; i++) {
      const currentElement = arr[i];

      if (currentElement % 2 === 0) {
        sumEvenElements += currentElement;
        countEvenElements++;
      }
    }

    const average = sumEvenElements / countEvenElements;

    return average;
  }


  function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
      const data = arrOfArr[i]; 

      const result = func(...data);
        if (result > maxWorkerResult) {
        maxWorkerResult = result;
      }
    }
    return maxWorkerResult;
  }