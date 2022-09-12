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

/**
 * Promise.resolve
 */
Promise.resolve({text:" I am a resolveer"})
.then((data)=>{
    console.log(data.text);
}); 

function resolver(){
    let arr = [10,30,50,70,90];
    return Promise.resolve(arr.map((list)=>{
        return list * 10;
    }))
}

resolver().
then((data)=>{
    console.log(data);
})

/**
 * Time logger using promises
 */

function timeLogger(message, time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(message);
        }, time);
        if(typeof message !== 'string' || typeof time !== 'number'){
            reject({message:"Wrong Type"});
        };
    })
};

timeLogger("I love Cynthia", 2500)
.then((data)=>{
    console.log(data)
    return timeLogger("Cynthia is a amazaing beauty", 2000);
})
.then((data)=>{
    console.log(data);
    return timeLogger("She's a soft spoken princess", 1500);
})
.then((data)=>{
    console.log(data);
    return timeLogger("Her smile is a charm", 1000);
})
.then((data)=>{
    console.log(data);
    return timeLogger("Cynthia's intelligence is inspirational", 800);
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.error(err.message);
});
/**
 * calling timie loger with wron type
 */
timeLogger("wueh! LOVE", "7000")
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.error(err.message + ' \n');
});

/**
 * Returning promses in then
 */
Promise.resolve("Apples")
.then((data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data + " Iphone 14");
        }, 100);
    });
})
.then((data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data + " Pro");
        }, 50);
    });
})
.then((data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(data + " Max  + \n");
        }, 10);
    });;
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.error(err.message );
});