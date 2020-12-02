const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Set for how many seconds?', (time) => {
  if (time === 'b') {
    console.log('Beep')
  } else if (time === '\u0003') {
    process.exit();
  } else {
    process.stdout.write(`timer has been set for ${time} seconds`)
    setTimeout(() => {
      process.stdout.write('beep' );
      setTimeout(() => {
        console.log("\n")
      })
  }, time  * 1000);
  }
  rl.close();
})
