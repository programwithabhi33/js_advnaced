export const abhi = ()=>{
    console.log("Abhi function")
}
export const rushi = ()=>{
    console.log("Rushi function")
}
// These above abhi and rushi function export as an object so you can use the destructring syntax in the imported file to access them 

const AnotherFunction = () =>{
    console.log("Im another function")
}

export default AnotherFunction; // This function will not availabe in the object in the imported file,it is directly accessible in the imported file by default