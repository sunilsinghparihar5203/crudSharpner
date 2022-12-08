const posts = [
  { CreatedAt: new Date().getTime(), Title: "Post One", body: "this is post one body" },
  { CreatedAt: new Date().getTime(), Title: "Post Two", body: "this is post two body" }
];

function msToTime(s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;
  if (hrs == 0 && mins == 0 && secs == 0) {
    return ms;
  }
  else if (hrs == 0 && mins == 0) {
    return secs + '.' + ms;
  }
  else if (hrs == 0) {
    return mins + ':' + secs + '.' + ms;
  } else {
    return hrs + ':' + mins + ':' + secs + '.' + ms;
  }

}

function getPosts() {
  let output = ''
    setTimeout(() => {
         posts.forEach((post, index) => {
        output += `<li>${post.Title} created ${Math.floor(msToTime(new Date().getTime() - post.CreatedAt))} seconds ago</li>`;
      })
     
      document.body.innerHTML = output
      console.log(posts)
    }, 1000);
}
setInterval(getPosts, 1000);




function deletePost(posts) {
   return new Promise((resolve, reject) => {
       posts.pop()
      const error = false
      if (!error) {
        resolve()
      } else {
        reject("Error: something went wrong!")
      }
  });

}

function createPost(post) {

  return new Promise((resolve, reject) => {
      posts.push(post)
    if(post.length >0){
      const error = false
    }else{
      const error = true
    }
      
      if (!error) {
        resolve()
      } else {
        reject("Error: something went wrong!")
      }
  });

}


createPost({ CreatedAt: new Date().getTime(), Title: "Post Three", body: "this is post three body." }, getPosts)
  .then(getPosts).then(deletePost(posts)).then(deletePost(posts)).then(deletePost(posts)).then(deletePost(posts)).catch(err => console.log("some thing went wrong."))



