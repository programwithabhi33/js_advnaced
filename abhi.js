// let a = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("This is the promise")
//         resolve(25)
//     }, 3000);
// })
// a.catch((err)=>{
//     console.log('Error '+err)
// })
// a.then((value)=>{
//     console.log('Promise successful')
// })

// you can handle the .catch method in the .then just pass another function after the first one , first one is for the succussful and the second one is for the error
// a.then((value) => {
//     console.log('Succesful '+value)
// }, (err) => {
//     console.log('Error '+err)
// })

// a.then(alert)

let abhi = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('First Promise has been resolve')
        // reject('Errorrr')
    }, 3000);
})

// Promise Method chaining
abhi.then((value)=>{
    setTimeout(() => {
        console.log(value)
    }, 2000);
    return new Promise((resolve,reject)=>{
        reject("Errorrrrrrrrr")
    });
}).then((value)=>{
    // setTimeout(()=>{
    //     console.log('Third One is the '+value)
        
    // },2000)
    console.log("Third One "+value)
}).catch((err)=>{
    console.log("Error comes "+err)
})