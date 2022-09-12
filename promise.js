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
/*myPromise.then((data)=>{
    console.log(data);
}).then(()=>{
    console.log("I am an output stream after promise is resolved");
}).catch((err)=>{   console.log(err)})*/

/**
 * Promises in action
 */

function adder(num1,num2){
    return new Promise( (resolve,reject)=>{
        const sumed = num1 + num2;
        setTimeout(()=>{
            resolve(sumed);
        }, 1500)
    })
}

function squarer(num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(num * num);
        },700);
    })
}

adder(10,2).then((data)=>{
    return squarer(data);
}).then((squaredData)=>{
    console.log(squaredData);
})