let alarmClock = function(arr) {
  if (arr === []) {
    return;
  }
  arrSorted = arr.sort((a, b) => a-b)
  console.log(arrSorted.length)
 
};

let alarm = process.argv.slice(2);
alarmClock(alarm)