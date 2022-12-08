console.log('person1 : shows ticket')
console.log('person2 : shows ticket')

const preMovie = async () => {
  const promiseWifeBringingtickets = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  })
  const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

  const addbutter = new Promise((resolve, reject) => resolve('butter'));

  const getColdDrinks = new Promise((resolve, reject) => resolve('cold drink'))

  let ticket = await promiseWifeBringingtickets;

  console.log(`wife: i have the ${ticket}`)
  console.log('husband: we should go in ')
  console.log('wife: No i am hungry')

  let popcorn = await getPopcorn;

  console.log(`husband : I got some  ${popcorn} `)
  console.log("husband : We should go in . ")
  console.log("Wife: I need button on my popcorn . ")

  let butter = await addbutter;

  console.log(`husband : I got some ${butter} on popcorn.`)
  console.log(`husband : anything else darling.`)
  console.log('Wife : lets go we are geting late')
  console.log('husband : thank you for reminder.')

  let ColdDrinks = await getColdDrinks;
  console.log(`husband : Wait i got  ${ColdDrinks} as well.`)
  return ticket;
};


preMovie().then((m) => console.log(`person 3 : show ${m}`));


console.log('person4 : shows ticket')
console.log('person5 : shows ticket')