function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}
function displayPost(posts) {
  let postContainer = document.getElementById("post-container");
  for (let post of posts) {
    let postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `<h4>User: ${post.userId}</h4>
        <p>Title: ${post.title} </p>
        <p>Description : ${post.body}</p>
        `;
    postContainer.appendChild(postDiv);
  }
}
loadPost();
