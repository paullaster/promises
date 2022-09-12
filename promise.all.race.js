/**
 * Promise.all returns an array if all the promises are resolved
 * or Error if any promise is rejected
 */

const logins = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "admin", password: "password"});
    },500);
});

const employeeInfo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({Dept: "Software ", position: "Software Engineer", name: "Paullaster Okoth"});
    },400)
});
/*logins.then((data)=>{
    console.log(data)
})
employeeInfo.then((data)=>{
    console.log(data);
});
*/

Promise.all([logins, employeeInfo])
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});

Promise.race([logins, employeeInfo])
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});