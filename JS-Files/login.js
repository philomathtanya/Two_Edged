// var imgbox = document.getElementById("display_image");
// var loadfile = function (event) {
//     imgbox.style.backgroundImage = "url(" + URL.createObjectURL(event.target.files[0])+")";
// }
// ---------------------------------------------------------------------------------------------------------------------------------------------
     // Import the functions you need from the SDKs you need
     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getDatabase, set, ref,get,child, update } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
0
 
     // TODO: Add SDKs for Firebase products that you want to use
     // https://firebase.google.com/docs/web/setup#available-libraries
   
     // Your web app's Firebase configuration
     const firebaseConfig = {
       apiKey: "AIzaSyC7Tg-ye4YR4nfeK4W_onQyBTEfyhEQG2Y",
       authDomain: "auth-two-edged.firebaseapp.com",
       projectId: "auth-two-edged",
       storageBucket: "auth-two-edged.appspot.com",
       messagingSenderId: "756054049274",
       appId: "1:756054049274:web:1c077552f729b4b1836443"
     };
   
     // Initialize Firebase
     const app = initializeApp(firebaseConfig);
     const auth = getAuth();
const database = getDatabase(app);
     

    // ...............................................................................................................................................

// submitdata.addEventListener('click', (e) => { 
var link;
  function login(){
  // alert("hellllo");
    // var uname = document.getElementById('Name').value;
    var email = document.getElementById('form2Example17').value;
    var password = document.getElementById('form2Example27').value; 
    // var p1=document.getElementById('Pass1').value;
    // var p2 = document.getElementById('Pass2').value;
    
  

        // createUserWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         // ...
        //         set(ref(database, 'users/' + user.uid), {
        //             username: uname,
        //             email: email,
        //             password: password,
        //             image_link: link,
        //             //  profile_picture : imageUrl
        //         })
        //             .then(() => {
        //                 // Data saved successfully!
        //                 alert('User Created');

        //             })
        //             .catch((error) => {
        //                 // The write failed...
        //                 alert(error);
        //             });
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         // ..
        //         alert(errorMessage);
        //     });
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {  
    // Signed in 
    const user = userCredential.user;
    // ...
    var lgDate = new Date();
       
const femail= email.substring(0, email.indexOf('@'));
    update(ref(database, 'users/' + femail), {
                   last_login:lgDate,
                    //  profile_picture : imageUrl
                })
                    .then(() => {
                        // Data saved successfully!
                      // alert('Login Done');
                      // document.getElementById("alert").innerText = "Successfully Loged In";
                      gett()

                      window.open("Gallery-Page.html","_self");


                    })
                    .catch((error) => {
                        // The write failed...
                        document.getElementById("alert").innerText = "Something Went Wrong!";

                        // alert(error);
                    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // alert(errorMessage);
    document.getElementById("alert").innerText = error.message;

  });

}
// get();
function gett() {
  //   alert("calling");
  //   var user_ref = database().ref('users/' + "yyy")
  //   user_ref.on('value', function (snapshot) {
  //       var data1 = snapshot.val()
  //       // console.log(data.link)
  //     alert(data1.image_link);
  //   })
  // }
  const dbref = ref(database);
  
  get(child(dbref, "users/" + "yyy"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // NameBox.value = snapshot.val().name;
        alert(snapshot.val().image_link)
        link = snapshot.val().image_link;
      profile.style.backgroundImage = "url("+snapshot.val().image_link+")";


      } else {
        alert("No Data Found");
      }
    })
    .catch((error) => {
      alert( error);
    });
}
// document.getElementById("submitdata").onclick = get;
document.getElementById("submitdata").onclick = login;

