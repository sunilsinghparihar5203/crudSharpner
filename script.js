console.log('person1 : shows ticket')
console.log('person2 : shows ticket')

const preMovie = async () => {
  const promiseWifeBringingtickets = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  })
  const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

  const getCandy = new Promise((resolve, reject) => resolve('Candy'));

  const getCoke = new Promise((resolve, reject) => resolve('Coke'))

  let ticket = await promiseWifeBringingtickets;

  let [popcord, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke])

  console.log(`${popcord} ,${candy}, ${coke}`)
  return ticket;
};


preMovie().then((m) => console.log(`person 3 : show ${m}`));


console.log('person4 : shows ticket')
console.log('person5 : shows ticket')