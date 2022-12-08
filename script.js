console.log('person1 : shows ticket')
console.log('person2 : shows ticket')

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ticket yes')
  }, 3000)
})

promiseWifeBringingTicks.then((t) => {
  console.log(`person 3 show ticket ${t}`)
})

console.log('person4 : shows ticket')
console.log('person5 : shows ticket')