let posts = [
    {id: 1, title: "First Title"},
    {id: 2, title: "Second Title"},
    {id: 3, title: "Third Title"}
]

function listPosts(){
    posts.map(post => {
        console.log(post);
    })
}

function addPost(newPost){
    return new Promise((resolve, reject) => {
        console.log("Trying to add new post..");
        if(newPost){
            posts.push(newPost);
            resolve("Post has been successfully added."); 
        }else{
            reject("Post not found.");
        }
    })
}

async function getPost(post){
    try{
        const receivedPost = await addPost(post);
        console.log(receivedPost);
        listPosts()
    }
    catch(err){
        console.log(err)
    }
}

getPost({id: 4, title: "Fourth Title"})