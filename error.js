try{
    if(2 == 2){
       abhi =  new SyntaxError('abhishek is the defined')
    //    throw abhi;
    }
    // console.log(abhi)
    throw new ReferenceError('')
}

// when the error is comes in the script then the catch  block will execute
catch(error){
    console.log(abhi)
}