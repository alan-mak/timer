const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Used for encoding input from keyboard
rl.input.setRawMode(true);
rl.input.setEncoding('utf8');

rl.input.on('data', time => {
  if (isNaN(time)) {
    if (time === 'b') {
      console.log('\nBeep')
      rl.close();
    } else if (time === '\u0003') {
      rl.output.write("\nThanks for using me, ciao!\n");
      process.exit();
    } else {
      console.log('\nThis is not a valid command')
      rl.close();
    }
  } else {
    console.log(`\nTimer has been set for ${time} seconds`)
    setTimeout(() => {
      console.log('beep');
    }, time * 1000);
    rl.close();
  }
});

