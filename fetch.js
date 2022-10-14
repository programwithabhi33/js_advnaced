// In the fetch api the firest response is the status code or the acutally when you hit the request it reflect the its status and then you can retrieve the data after that 
// const response = fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json')
// response.then((value)=>{
//     return value.json();
// }).then((value)=>{
//     console.log(value)
// })
const mainPost = async () => {
    const a = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Abhishek',
            body: 'abhi',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let response = await a.json();
    return response;
}
const mainGet = async () => {
    const a = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    let response = await a.json();
    return response;
}
const main3 = async ()=>{
    let a = await mainPost();
    let b = await mainGet();
    console.log(a);
    console.log(b);
}
main3();
 