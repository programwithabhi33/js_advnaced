// In the fetch api the firest response is the status code or the acutally when you hit the request it reflect the its status and then you can retrieve the data after that 
const response = fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json')
response.then((value)=>{
    return value.json();
}).then((value)=>{
    console.log(value)
})