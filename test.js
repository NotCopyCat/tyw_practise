

var age = prompt("enter your agee:");

if (age < 18) {
  document.write("your are still bacha");
} else if (age == 18) {
 document.write("your are naw jawan");
} else {
  document.write("you are your mard");
}

function hello(){
  document.getElementById('newsection').innerHTML ="<h1>"+ "test" + "</h1>";
}

function keyPress(){
  alert("keyPress");
}

var a = 1;  // inisilizing
 while( a<10 ) // condition
 {
   document.write( a + " your samller than 10" +"</br>"); // print
   a = a +1; // incercment and decersment
 }
