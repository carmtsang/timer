const times = process.argv.slice(2);
const arr = [];

for (let time of times) {
  if (Math.sign(time) === 1) {
    arr.push(time);
  }
};

for (let element of arr) {
  setTimeout(()=> {
    process.stdout.write('\x07');
  }, 1000 * element);
};
