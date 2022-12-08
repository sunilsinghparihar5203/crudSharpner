const preMovie = async () => {
  const promiseWifeBringingtickets = new Promise((resolve, reject) => {
    setTimeout(() => reject('ticket'), 3000);
  })
  let ticket;
  try {
    ticket = await promiseWifeBringingtickets;
  } catch (e) {
    ticket = 'sad face';
  }
  return ticket
};

preMovie().then((m) => console.log(`person 3 : show ${m}`));
