import{
    getDatabase,
    ref,
    get,
    set,
    update,
    remove,
    child,
  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";  
const db = getDatabase();
// document.getElementById("post").style.justifyContent = center;
function getAllUserData() {
    // alert("hello");
    const dbref = ref(db);
  
    get(child(dbref, "data/")).then((snapshot) => {
      var users = [];
      snapshot.forEach((childSnapshot) => {
        users.push(childSnapshot.val());
      });
      console.log(users);
      DisplayUsers(users);
    });
}

window.onload = getAllUserData();
var tbody = document.getElementById("post");

function DisplayUsers(users) {

    tbody.innerHTML = "";
    users.forEach((user) => {
// post.style
      post.innerHTML = "<div class='boxes' style=' padding:3%; background-image: url(" + user.link + "); background-repeat: no-repeat;     background-position: center; size: 10px;;background-size: cover; display:flex; margin:3%; justify-content: center;align-items: center;'><h1 class='text' style=' color: white;font-size:250% ;font-family: 'Dancing Script', cursive;'>"+user.quote+"</h1></div>"+tbody.innerHTML;     // boxes.innerHTML = "<h1></h1>";

        // boxes.style.backgroundImage = url(user.link);
        // alert("gp");
        // "<img src='"+value.imageURL+"' style='height:250px;'>"+
        // "<div class='card-body'><p class='card-text'>"+value.text+"</p>"+
        // "<button class='btn btn-danger' id='"+key+"' onclick='delete_post(this.id)'>Delete</button>"+
        // "</div></div></div>"+posts_div.innerHTML;


    });
}
//tanya