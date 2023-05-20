// let waada1= new Promise(function(resolve, reject){
//     setTimeout(() =>{console.log("Waada1 is something")},2500);
//     resolve(true);
// })

// let output = waada1.then(()=>{
//     let waada2= new Promise(function(resolve,reject){
//         setTimeout(()=>{console.log("Waada2 is something")},1000);
//         resolve("waada2 resolved");
//     })
//     return waada2;
// })

// output.then((value)=> console.log(value));