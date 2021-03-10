// JSON stands for Javascript Object Notation ..
// JSON is a lightweight format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.

// stringify() :- this method is used to change the js object into JSON.
// parse() :- this method is used to change the Json into Js object.

const BioDta = {
    name: "Abhishek",
    age: 20,
    branch: 'CSE'
}
console.log(BioDta.branch);

const jsonDta = JSON.stringify(BioDta);
console.log(jsonDta);

const objDta = JSON.parse(jsonDta);
console.log(objDta.branch);