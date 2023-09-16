// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const { john, peter } = require('./4-names')
const greet = require('./5-utils')
const data = require('./6-alternative-syntax')
require('./7-mind-grenade')

console.log(data)
greet('susan')
greet(john)
greet(peter)