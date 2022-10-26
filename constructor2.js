// console.log('constructor2')
class Abhi{
    constructor(name){
        this._name = name;
        // console.log(name)
    }
    // Get method in the javascript class you can make it with the property name but you have to set the property or call the propert like _name 
    get name(){
        console.log(`This is the get method in the Abhi class ${this._name}`)
    }
    // setter in the javascript class same as get but set the value 
    set name(name){
        this._name = name;
        console.log(`This is the set method in the Abhi class ${this._name}`)
    }
}

// class Abhi2 extends Abhi{
//     constructor(name){
//         // console.log(name)
//         super(name)
//         // super() Note:- You have to call the super class constructo before access the this keyword 
//     }
//     static main2(){
//         console.log('this is the static method in the abhi3 class')
//     }
//     // Main2 is the static method in the Abhi2 class means it is the class member function not inistantiased with the objects and not accessible with the objects 
// }
// let abhishek = new Abhi2('abhishek');
// // console.log(abhishek.name)
// Abhi2.main2();

let abhishek = new Abhi('abhishek')
// abhishek.name; //You can direclty call or without curly braces because this is the get method in the class 
abhishek.name = 'abhishek'; //You can direclty call or without curly braces because this is the set method in the class 

// console.log('abhishek is the instanceof the class Abhi ' +abhishek instanceof Abhi)
console.log(abhishek instanceof Abhi)
