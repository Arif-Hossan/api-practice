//fetch the comments
function loadComment() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComment(data));
}

function displayComment(comments) {
  //get the comment container
  let commentContainer = document.getElementById("comment");
  for (let comment of comments) {
    //create comment (child) section
    let commentDiv = document.createElement("div");
    //add class to the div container
    commentDiv.classList.add('single-comment');
    //set innerText of innerHTML (multiple)
    commentDiv.innerHTML = `
    <h5>id : ${comment.id}</h5>
    <p>name : ${comment.name}</p>
    <p>email : ${comment.email}</p>
    <p>body : ${comment.body}</p>`;
    //append child
    commentContainer.appendChild(commentDiv);
  }
}
loadComment();
