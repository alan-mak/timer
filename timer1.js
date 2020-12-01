let alarmClock = function(arr) {
  if (arr === []) {
    return;
  }
  let arrSorted = arr.sort((a, b) => a-b)
  // console.log(arrSorted[arrSorted.length -1])

  for (let counter of arrSorted) {
    if (counter < 0) {
      console.log(counter, "Not allowed in the past")
    } else if (isNaN(counter)) {
      console.log(counter, "is not a number type")
    } else {
      setTimeout(() => {
          process.stdout.write('beep' );
          setTimeout(() => {
            console.log("\n")
          })
      }, counter  * 1000);
    }
  }
};

let alarm = process.argv.slice(2);
alarmClock(alarm)