let obj = {
    name:'abhishek',
    role:"Software Developer",
    exp:2,
    show:function(){ // Normal function will take its current execution context this
        console.log("show")
        console.log(this)
        // function abhi(){
            console.log('abhi')
            console.log(this)
            let a = ()=>{ //arrow function will take its parent this
                console.log('a')
                console.log(this)
            }
            a();
        // }
        // abhi();
    }   
}
obj.show();