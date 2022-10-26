// console.log('constructor2')
class Abhi{
    name
    constructor(name){
        this.name = name;
        console.log(name)
    }
}

class Abhi2 extends Abhi{
    constructor(name){
        // console.log(name)
        super(name)
        // super() Note:- You have to call the super class constructo before access the this keyword 
    }
}
let abhishek = new Abhi2('abhishek');
console.log(abhishek.name)
