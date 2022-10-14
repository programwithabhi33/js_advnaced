// By default the async function return the promise
// let abhi = async (name)=>{
//     let a =  new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(name);
//         }, 2000);
//     })
//     let b =  new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('abhishek3');
//         }, 2000);
//     })
//     return 'abhishek';
// }
// // console.log(abhi)
// let main2 = async ()=>{
//     let a =  abhi('abhishek2')
//     console.log(a)
// }
// main2();
// console.log('this is the me')

let p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('abhishek');
    }, 2000);
})
// let main2 = async ()=>{
//     let a = await p;
//     console.log(a)
// }
// main2()
// console.log(p)
let abhi = async ()=>{
    let b = p;
    let a = await Promise.all([b]);
    console.log(a)
}
abhi();