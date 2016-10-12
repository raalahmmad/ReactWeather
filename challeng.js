function addPromise(a,b){ 
return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
    }
    else{
        reject("Non numperse provided!");
    }    
});
}

addPromise(5,'yes').then(function(result){
    console.log("The result is: " , result);
}, function(err){
    console.log("Opps: ", err);
});