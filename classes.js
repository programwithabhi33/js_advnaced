class Abhi{
    submit(){
        console.log(this.name + ' Your Form has been submitted')
    }
    cancel(){
        console.log(this.name + ' You form has been cancel')
    }
    fill(name){
        this.name = name;
    }

}
abhishek = new Abhi();
abhishek.fill('abhishek');
abhishek.submit();
abhishek.cancel();