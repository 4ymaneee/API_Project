//Get All Posts
function getPosts(userId) {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId
  );
  request.responseType = "json";
  request.send();
  request.onload = function () {
    let posts = request.response;
    let allPosts = document.querySelector(".posts");
    allPosts.innerHTML = "";
    for (let post of posts) {
      allPosts.innerHTML += ` <div class="post">
                                <h4>${post.title}</h4>
                                <hr style="margin: 5px 0 5px 0;">
                                <h5>${post.body}</h5>
                                </div>`;
    }
  };
}

//Get All Users
function getUsers() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.responseType = "json";
  request.send();
  request.onload = function () {
    let users = request.response;
    let allUsers = document.querySelector(".users");
    allUsers.innerHTML = "";
    for (let user of users) {
      allUsers.innerHTML += `<div class="user" onclick="userClicked(${user.id}, this)">
                                     <h5>${user.name}</h5>
                                     <h6>${user.email}</h6>
                                     </div>`;
    }
  };
}

getPosts(1);
getUsers();

function userClicked(id,ele) {
  getPosts(id);
  let selectedElements = document.getElementsByClassName('selected')
  for(let element of selectedElements){
    element.classList.remove('selected')
  }
  ele.classList.add('selected')
}