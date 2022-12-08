console.log('person1 : shows ticket')
console.log('person2 : shows ticket')

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ticket')
  }, 3000)
})

const getPopcorn = promiseWifeBringingTicks.then((t) => {
  console.log("Wife : I have the tickets.")
  console.log("husaband : we should go in .")

  console.log(`wife : no i am hungry`)

  return new Promise((resolve, reject) => resolve(` ${t} butter`))
})

const getButter = getPopcorn.then((t) => {
  console.log("husaband : I got some popcorn .")
  console.log("husaband : we should go in .")
  console.log(`wife : I need butter on my popcorn`)

  return new Promise((resolve, reject) => resolve(` ${t} popcorn`))
})

getButter.then((t) => console.log(t))


console.log('person4 : shows ticket')
console.log('person5 : shows ticket')