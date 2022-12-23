// var imgbox = document.getElementById("display_image");
// var loadfile = function (event) {
//     imgbox.style.backgroundImage = "url(" + URL.createObjectURL(event.target.files[0])+")";
// }
// ---------------------------------------------------------------------------------------------------------------------------------------------
     // Import the functions you need from the SDKs you need
     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
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

submitdata.addEventListener('click', (e) => { 
    var uname = document.getElementById('Name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('Pass1').value; 
    // var p1=document.getElementById('Pass1').value;
    var p2 = document.getElementById('Pass2').value;
         const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (uname == "" || email == "" || password == "" || p2 == "") {
        document.getElementById("showerr").innerText = "Empty Fields!";
        return;
    }
    if (link == "") {
        document.getElementById("showerr").innerText = "Select Avatar";
        return;
    }
     if (!regex_pattern.test(email)) {

        document.getElementById("showerr").innerText = "Invalid Email";
        return;
        } 
    if (password == p2) {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                
                const femail = email.substring(0, email.indexOf('@'));
                set(ref(database, 'users/' + femail), {
                    username: uname,
                    email: email,
                    password: password,
                    image_link: link,
                    //  profile_picture : imageUrl
                })
                    .then(() => {
                        // Data saved successfully!
                        // alert('User Created');
                        document.getElementById("showerr").innerText="Sucessfully Signed Up";
                        // window.open('Login.html');

                    })
                    .catch((error) => {
                        // The write failed...
                        alert(error.message);
                        // window.open("Login.html");
                        document.getElementById('showerr').innerText="Error Check Again";
                        console.log(error);
                        // window.open('Login.html');

                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                // alert(errorMessage);
                document.getElementById('showerr').innerText="Something went wrong ,Try again ";


            });
    }
    else {
        // alert("Password does'nt Match");
        document.getElementById("showerr").innerText = "Password dosen't match";
    }
    // ---------------------------------------------------------------------------------------------------------------------------------------
    // document.getElementById('a1').onclick(change())
//     function change() {
//         alert("clicked");
//         a1.style.cssText = 'border:2px red solid';
    
// }

})
// get();
