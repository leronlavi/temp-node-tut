// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const sayHi = require('./5-utils')
const names = require('./4-names')
const data = require('./6-alternative-flavor')

console.log(data.singlePerson)
console.log(names);

sayHi(names.shani);