const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let logic = true;

rl.question('Set for how many seconds?', (time) => {
  if (isNaN(time)) {
    if(time === 'b') {
        console.log('beep')
        rl.close();
    } else {
        console.log('this is not a valid command')
        rl.close();
    }
  } else {
    console.log(`timer has been set for ${time} seconds`)
    setTimeout(() => {
      console.log('beep');
    }, time  * 1000);
    rl.close();
  }
})
// if (key === '\u0003') {
  // console.log("Thanks for using me, ciao!");
  // process.exit();
// }