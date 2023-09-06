function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postData(data))
}

/*
// Kono ekta element er moddhe element add korar rules

1.get the container element where you want to add the new element
2. create child element
3. set innerTex pr innerHtml
4.appendChild


*/
function postData(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        console.log(post);
        postDiv.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>Post:${post.title}</h5> 
            <p>${post.body}</p> 
        `;
        postContainer.appendChild(postDiv); 
    }
} 
loadPost();