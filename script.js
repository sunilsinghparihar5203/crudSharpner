var posts = []

function createPost(post) {
  return new Promise((resolve, reject) => {
    posts.push(post)
    console.log(post.Title + " created")
    resolve(posts)
    console.log(getpost())
  });
}

function getpost() {
      return posts
}

async function deletePost() {

      await createPost({ CreatedAt: new Date().getTime(), Title: "Post one", body: "this is post one body." })
        
      await setTimeout(()=>{
         if (posts.length > 0) {
           posts.pop();
           console.log("post removed")
        }else{
           console.log("posts not available")
        }
         console.log(getpost())
      },5000)
      
  
}

 deletePost() 