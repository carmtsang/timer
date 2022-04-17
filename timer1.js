const times = process.argv.slice(2);
const arr = [];

//filter out any negative numbers and NaN values
for (let time of times) {
  if (Math.sign(time) === 1) {
    arr.push(time);
  }
};

//beep at every second specified in the loop;
for (let element of arr) {
  setTimeout(()=> {
    process.stdout.write('\x07');
  }, 1000 * element);
};
