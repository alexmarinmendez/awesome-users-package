const { users, greet } = require('./index')

console.log(greet('Alex'))
users().then(data => console.log(data)).catch(err => console.log(err))