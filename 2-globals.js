// GLOBALS - NO WINDOW !!!

// __dirname - path to current directory
// __file - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname)

setInterval(() => { console.log('interval') }, 1000)

setTimeout(() => { console.log('timeout') }, 1000)