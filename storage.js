var user ={name:"John", age:30, city:"New York"};
localStorage.setItem("user", JSON.stringify(user));
var retrievedUser = localStorage.getItem("user");
var userObj = JSON.parse(retrievedUser);
document.getElementById("demo").innerHTML = userObj.name + " is " + userObj.age + " years old and lives in " + userObj.city + ".";