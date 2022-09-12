/**
 * JAVASCRIPT PROMISES
 */
const myPromise = new Promise( (resolve,reject)=>{
    if(Math.random() > 0.7){
        reject("I am a reject");
    }
    setTimeout(()=>{
        resolve("I am a promise");
    }, 1500)
});
myPromise.then((data)=>{
    console.log(data);
}).then(()=>{
    console.log("I am an output stream after promise is resolved");
}).catch((err)=>{   console.log(err)})