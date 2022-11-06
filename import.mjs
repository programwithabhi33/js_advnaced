// import {abhi,rushi} from './export.mjs' //Destructuring in the es modules 
import AnotherFunction,{abhi,rushi} from './export.mjs' //AnotherFunction is exported by default so it can't be available in the object 
console.log(abhi)
console.log(AnotherFunction)