let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is the promise")
        reject('some error')
    }, 3000);
})
// a.catch((err)=>{
//     console.log('Error '+err)
// })
// a.then((value)=>{
//     console.log('Promise successful')
// })

// you can handle the .catch method in the .then just pass another function after the first one , first one is for the succussful and the second one is for the error
a.then((value) => {
    console.log('Succesful '+value)
}, (err) => {
    console.log('Error '+err)
})