//best practice
// console.log('from user');
function loadUser2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}

let displayUser = (users) => {
  let ul = document.getElementById("user-list");
  for (let user of users) {
    let li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
};
//removing element using event loop
let ul = document.getElementById("user-list");
ul.addEventListener("click", function (e) {
  e.target.parentNode.removeChild(e.target);
});
