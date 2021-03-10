const path = require('path');

console.log(path.dirname('C:\Users\lenovo\Node Js\6PathModule\path.js')); //directory name
console.log(path.extname('C:\Users\lenovo\Node Js\6PathModule\path.js')); //Extension Name

console.log(path.basename('C:\Users\lenovo\Node Js\6PathModule\path.js'));

console.log(path.parse('C:\Users\lenovo\Node Js\6PathModule\path.js'));

const pathName = path.parse('C:\Users\lenovo\Node Js\6PathModule\path.js');

console.log(pathName.name)