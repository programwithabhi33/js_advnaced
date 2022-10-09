let abhi = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(32)
    }, 3000);
})

async function abhishek (){
    let a = await abhi;
    console.log(a)
    return 'abhishek is the great';
}
// let b = abhishek();

let another = async function (){
    let result = await abhishek();
    console.log(result)
}
another();