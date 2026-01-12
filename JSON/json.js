let obj = { name: "Sanchi", age: 22 };
let jsonStr = JSON.stringify(obj);

console.log(jsonStr);
// '{"name":"Sanchi","age":22}'
typeof jsonStr; // "string"



let obj = {
  a: 1,
  b: undefined,
  c: function(){}
};

console.log(JSON.stringify(obj));
// {"a":1}



//Converts a JSON string into a JavaScript object.
let jsonStr = '{"name":"Sanchi","age":22}';
let obj = JSON.parse(jsonStr);

console.log(obj.name); // Sanchi
typeof obj; // "object"

try {
  let data = JSON.parse(jsonStr);
} catch (e) {
  console.log("Invalid JSON");
}



//JSON.stringify() normally converts the entire object into a JSON string.

//But it has a secret second parameter called a replacer.
//The second parameter of JSON.stringify() can be used as a replacer to filter which properties should be included in the resulting JSON string.
JSON.stringify(value, replacer)
/Replacer in JSON.stringify()
let obj = { name: "Sam", age: 20, city: "Pune" };

JSON.stringify(obj, ["name", "age"]);
// '{"name":"Sam","age":20}'


let user = {
  name: "Alex",
  password: "12345",
  role: "admin"
};

JSON.stringify(user, ["name", "role"]);
//output {"name":"Alex","role":"admin"}





//Reviver in JSON.parse()

//Lets you modify values while parsing.
let json = '{"age":20}';

let obj = JSON.parse(json, (key, value) => {
  if (key === "age") return value + 1;
  return value;
});

console.log(obj.age); // 21

