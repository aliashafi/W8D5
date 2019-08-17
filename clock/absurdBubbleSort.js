const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function askIfGreaterThan(el1, el2, callback) {
  reader.question(`is ${el1} greater than ${el2}?`, function(res) {
    const answer = (res === 'yes') ? true : false; 
    return callback(answer);
  });
}


function absurdBubbleSort(arr, sortCompletionCallback) {
  
  return innerBubbleSortLoop(arr, 0, true, outerBubbleSortLoop);
  
  function outerBubbleSortLoop(madeAnySwaps) {
    console.log('in outer');
    if (madeAnySwaps) {
      return innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      return sortCompletionCallback(arr);
    }
  }

}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length-1) {
    askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => { 
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      } else {
        madeAnySwaps = false;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);

    }); 
  } else {
    console.log('im here');
    return outerBubbleSortLoop(madeAnySwaps);
  }
  
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});