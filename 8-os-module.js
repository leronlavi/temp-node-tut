const os = require('os')

// in fo about current user
const user = os.userInfo()
console.log(user)

//method returns the system putime in seconds
console.log(`The System Uptime is ${os.uptime()} secounds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)