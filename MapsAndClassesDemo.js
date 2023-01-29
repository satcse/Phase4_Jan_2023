var map1 = new Map();
map1.set("first name","Robb");
map1.set("last name","Stark");
map1.set("friend 1","Bran").set("friend 2","John");

console.log(map1.keys());
console.log("map1 has friend 3?"+map1.has("Friend 3")); // False
console.log("get Value for key = friend 3"+map1.get("friend 3")); // null/undefined
console.log("delete element with key = friend 2"+map1.delete("friend 2"));
console.log(map1.keys());
map1.clear();
console.log(map1.keys());

class Employee
{
    constructor(id, name)
    {
        this.id=id;
        this.name=name;
    }

    detail()
    {
        document.writeln(this.id+" "+this.name+"<br>")
    }
}

var e1 = new Employee(101, "Michael");
var e2 = new Employee(102, "Sathish");
e1.detail();
e2.detail();


