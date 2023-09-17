// setInterval is also async
// offloaded
setInterval(() => {
    console.log('hello world');
}, 2000)
console.log('I will run first');
// process stays alive unless
// STOP process CONTROL + C
// or unexpected error