// Create a function that always returns true 
// for every item in a given array. However, 
// if an element is the word "flick", switch 
// to always returning the opposite boolean value.

// flickSwitch(["edabit", "flick", "eda", "bit"]) ➞ [true, false, false, false]

// flickSwitch(["flick", 11037, 3.14, 53]) ➞ [false, false, false, false]

// flickSwitch([false, false, "flick", "sheep", "flick"]) ➞ [true, true, false, false, true]

function flickSwitch(array) {
  let newArr = [];
  let trueItem = true;
  array.forEach((item) => {
    if (item === "flick") {
      trueItem = !trueItem;
    }
    newArr.push(trueItem);
  });
  console.log(newArr);
}

flickSwitch(["edabit", "flick", "eda", "bit"]);
flickSwitch(["flick", 11037, 3.14, 53]);
flickSwitch([false, false, "flick", "sheep", "flick"]);

  