import {
    getDatabase,
    ref,
    get,
    set,
    update,
    remove,
    child,
  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
  
var quo = "";
var link = "";
  
const db = getDatabase();
var p = 0;

  
 function imag1() {
    
    link = "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWVzdGhldGljJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  //  quo = document.getElementById("w1").value;
   if (p == 0) {
     document.getElementById("p1").style.opacity = "0.5";
     p = 1;
   }
   else {
     document.getElementById("p1").style.opacity = "1";
     p = 0;
   }

     //    alert(link + quo);/
      //  insertData();
   
       
   
   }
   function imag2(){
        link = "https://images.unsplash.com/photo-1614944467560-36bfe1902b75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGJsdXIlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
    //  quo = document.getElementById("w1").value;
     if (p == 0) {
      document.getElementById("p2").style.opacity = "0.5";
      p = 1;
    }
    else {
      document.getElementById("p2").style.opacity = "1";
      p = 0;
    }
    //    alert(link + quo);
      //  insertData();

   }
   function imag3(){
        link = "https://images.unsplash.com/photo-1614101595484-712913c033b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWVzdGhldGljJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
    //  quo = document.getElementById("w1").value;
     if (p == 0) {
      document.getElementById("p3").style.opacity = "0.5";
      p = 1;
    }
    else {
      document.getElementById("p3").style.opacity = "1";
      p = 0;
    }
    //    alert(link + quo);       
      //  insertData();

}
function imag4(){
  link = "https://images.unsplash.com/photo-1668189224454-9cce8038cfeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80";
  // quo = document.getElementById("w1").value;
  if (p == 0) {
    document.getElementById("p4").style.opacity = "0.5";
    p = 1;
  }
  else {
    document.getElementById("p4").style.opacity = "1";
    p = 0;
  }
//    alert(link + quo);       
//  insertData();

}
function imag5(){
  link = "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ciUyMGFlc3RoZXRpYyUyMGJhY2tncm91bmRzJTIwZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
  // quo = document.getElementById("w1").value;
  if (p == 0) {
    document.getElementById("p5").style.opacity = "0.5";
    p = 1;
  }
  else {
    document.getElementById("p5").style.opacity = "1";
    p = 0;
  }
//    alert(link + quo);       
//  insertData();

}
function imag6(){
  link = "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsdXIlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  // quo = document.getElementById("w1").value;
  if (p == 0) {
    document.getElementById("p6").style.opacity = "0.5";
    p = 1;
  }
  else {
    document.getElementById("p6").style.opacity = "1";
    p = 0;
  }
  //  alert(link + quo);       
//  insertData();

}
function imag7(){
  link = "https://images.unsplash.com/photo-1615468992004-112af4ba390e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJsdXIlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  // quo = document.getElementById("w1").value;
  if (p == 0) {
    document.getElementById("p7").style.opacity = "0.5";
    p = 1;
  }
  else {
    document.getElementById("p7").style.opacity = "1";
    p = 0;
  }
//    alert(link + quo);       
//  insertData();

}
function imag8(){
  link = "https://images.unsplash.com/photo-1519624998-95e6a0186cd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJsdXIlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  // quo = document.getElementById("w1").value;
  if (p == 0) {
    document.getElementById("p8").style.opacity = "0.5";
    p = 1;
  }
  else {
    document.getElementById("p8").style.opacity = "1";
    p = 0;
  }
//    alert(link + quo);       
//  insertData();

}  
function imag9(){
  link = "https://images.unsplash.com/photo-1611395565710-f7981ee9a073?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGJsdXIlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  // quo = document.getElementById("w1").value;
  if (p == 0) {
    document.getElementById("p9").style.opacity = "0.5";
    p = 1;
  }
  else {
    document.getElementById("p9").style.opacity = "1";
    p = 0;
  }
//    alert(link + quo);       
//  insertData();

}
  // Reference
  // Getting data from Textboxes
//   var RollBox = document.getElementById("rollBox");
//   var NameBox = document.getElementById("nameBox");
//   var GenBox = document.getElementById("genBox");
//   var AddBox = document.getElementById("addBox");
  
  // Button References
  
function insertData(event) {
  quo = document.getElementById("w1").value;

    // alert("hello");
    // alert(link + quo);
    // event.preventDefault();
    // readFormData();
    if (quo == "" ) {
      // alert("");
      document.getElementById("alert").innerText = "Fields can not be blank";

    }if (link == "") {
      // alert("");
      document.getElementById("alert").innerText = "Choose Background!";

    }
    else if(link!="" && quo !=""){
      // Code to send the data to Firebase
      set(ref(db, "data/" +quo), {
    link: link,
        quote: quo,
        // gender: genderV,
        // address: addressV,
      })
          .then(() => {
            //   document.getElementById("result").innerText("Data Stored Sucessfully");
            // alert("Data Stored Successfully");
            document.getElementById("alert").innerText="Posted Successfully"
            link = "";
            quo = "";
        })
        .catch((error) => {
          alert("Unsccussful", error);
        });
  
     
    }
  }
  
  // Read Data from Form
  
// function readFormData() {
      
//     rollV = RollBox.value;
//     nameV = NameBox.value;
//   }
 
  
//   document.querySelectorAll(".btn")[0].onclick = insertData;
document.getElementById("p1").onclick = imag1;
document.getElementById("p2").onclick = imag2;
document.getElementById("p3").onclick = imag3;
document.getElementById("p4").onclick = imag4;
document.getElementById("p5").onclick = imag5;
document.getElementById("p6").onclick = imag6;
document.getElementById("p7").onclick = imag7;
document.getElementById("p8").onclick = imag8;
document.getElementById("p9").onclick = imag9;
document.getElementById("cli").onclick = insertData;
//


