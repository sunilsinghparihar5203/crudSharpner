const posts = [
  { CreatedAt: new Date().getTime(), Title: "Post One", body: "this is post one body" },
  { CreatedAt: new Date().getTime(), Title: "Post Two", body: "this is post two body" }
];


function getPosts() {
  let output = ''
  posts.forEach((post, index) => {
    output += `<li>${post.Title} created ${Math.floor(msToTime(new Date().getTime() - post.CreatedAt))} seconds ago</li>`;
  })
  document.body.innerHTML = output
  console.log(posts)
}
 getPosts()
//setInterval(getPosts, 1000);


function deletePost(posts) {
  setTimeout(() => {
    posts.pop()
    console.log("deleted after 1 sec.")
    getPosts()
  }, 1000)
};

function createPost(post) {

  return new Promise((resolve, reject) => {
    posts.push(post)
    const error = false
    if (!error) {
      
      console.log("new post created")
      getPosts()
      resolve()
    } else {
      reject("Error: something went wrong!")
    }
  });

}


createPost({ CreatedAt: new Date().getTime(), Title: "Post four", body: "this is post three body." }, getPosts).then(() => {
  deletePost(posts)
}).then(getPosts).catch(err => console.log("some thing went wrong."))




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