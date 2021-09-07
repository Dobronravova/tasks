// Create a function that always returns true 
// for every item in a given array. However, 
// if an element is the word "flick", switch 
// to always returning the opposite boolean value.

// flickSwitch(["edabit", "flick", "eda", "bit"]) ➞ [true, false, false, false]

// flickSwitch(["flick", 11037, 3.14, 53]) ➞ [false, false, false, false]

// flickSwitch([false, false, "flick", "sheep", "flick"]) ➞ [true, true, false, false, true]

const flickSwitch = (arr) => {
    const newArr = [];
    arr.forEach(item => newArr.push(true))
      for (let i = 0; i < arr.length; i++){
        if(arr[i] === 'flick'){
          for (let k = i; k < arr.length; k++){
            newArr[k] = !newArr[k]
          }
          continue;
        }
      }
      return newArr;
  }
  console.log(flickSwitch(["edabit", "flick", "eda", "bit"]));
  console.log(flickSwitch(["flick", 11037, 3.14, 53]));
  console.log(flickSwitch([false, false, "flick", "sheep", "flick"]))
  