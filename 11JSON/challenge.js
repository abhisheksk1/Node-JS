//                               challenge ....
// 1: Convert to JSON..
// 2: Dusre File me add krdena h..
// 3: ReadFile..
// 4: again convert back to js object..
// 5: show it on console.log()..

const fs = require('fs')

const BioData = {
    name: "Abhishek",
    age: 20,
    branch: 'CSE'
}

const jsonData = JSON.stringify(BioData);
fs.writeFile("json1.json", jsonData, (err) => {
    console.log('done');
});

fs.readFile("json1.json", "utf-8", (err, data) => {
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})