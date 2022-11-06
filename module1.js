// var path = require('path');
// console.log(a)
// abhi = function(){
//     var a = 30;
// }
// abhi();

// var x = path.join('Users', 'Refsnes', 'demo_path.js');

// console.log(x);
// const dirPath = path.join(__dirname, './pictures');
// console.log(dirPath)

let obj = {
    name:'abhishek',
    age:20,
}
let obj2 = {
    name:'rushikesh',
    age:21,
}

module.exports = obj; // This is how you can export the module in the common js
module.exports = {obj,obj2}; // This is how you can export multiple objects in the common js