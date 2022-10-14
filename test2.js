
// let a = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Initializing Network...')
//     }, 2000)
// })
// let a1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Connecting to service...')
//     }, 2000)
// })
// let a2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Retreiving username...')
//     }, 2000)
// })
// let a3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Username found....')
//     }, 2000)
// })
// let a4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Trying a combination of 4.5 Trillion passwords...')
//     }, 2000)
// })
// let a5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Password found...')
//     }, 2000)
// })
// let a6 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Connecting to Facebook...')
//     }, 2000)
// })
// let main2 = async () => {
//     let b = await a;
//     console.log(b)
//     let b1 = await a1;
//     console.log(b1)
//     let b2 = await a2;
//     console.log(b2)
//     let b3 = await a3;
//     console.log(b3)
//     let b4 = await a4;
//     console.log(b4)
//     let b5 = await a5;
//     console.log(b5)
//     let b6 = await a6;
//     console.log(b6)
// }
// main2();
// // console.log(a)

let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('abhishek')
    }, 2000);
})

let c = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('abhishek2')
    }, 2000);
})
let x = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('abhishek2')
    }, 2000);
})
// console.log(a);
let b = async () => {
    // let e = await a;
    console.log(a);
    // let d = await c;
    console.log(c);
    // let z = await x;
    console.log(x);
}
b();
