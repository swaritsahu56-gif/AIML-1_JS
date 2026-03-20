var text ='{"employees":['+
'{"firstName":"John", "lastName":"Doe"},'+
'{"firstName":"Anna", "lastName":"Smith"},'+
'{"firstName":"Peter", "lastName":"Jones"}]}';
var obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[0].firstName + " " + obj.employees[1].lastName;
