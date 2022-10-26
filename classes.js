class Abhi{
    constructor(name){
        this.name = name;
    }
    submit(){
        console.log(this.name + ' Your Form has been submitted')
    }
    cancel(){
        console.log(this.name + ' You form has been cancel')
    }
    // fill(name){
    //     this.name = name;
    // }

}
class Abhi2 extends Abhi {
    // When you have your own constructor when you need parent constructor you must call the parent constructor with the super method
    // constructor(){
    //     console.log("This is the constroctor of the Abhi2 class")
        // super() This is how we called parent class constructor
    // }
   another_function(){
    console.log("this is the another function in the Abhi2 class")
   }

}

// abhishek = new Abhi('abhishek');
// // abhishek.fill('abhishek');
// abhishek.submit();
// abhishek.cancel();

abhishek2 = new Abhi2('abhi');
// abhishek.fill('abhishek');
abhishek2.submit();
abhishek2.cancel();