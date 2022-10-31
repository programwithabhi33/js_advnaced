let obj = {
    name:'abhishek',
    role:"Software Developer",
    exp:2,
    show:function(){
        console.log("show")
        console.log(this)
        // function abhi(){
            console.log('abhi')
            console.log(this)
            let a = ()=>{
                console.log('a')
                console.log(this)
            }
            a();
        // }
        // abhi();
    }   
}
obj.show();