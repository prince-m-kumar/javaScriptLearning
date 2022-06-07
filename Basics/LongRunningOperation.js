//Promises pattern

function promiseTimeout(ms){
    return new Promise((resolve, reject) =>{
            setTimeout(resolve, ms);
    });
}

promiseTimeout(2000).then(()=>{
    console.log('done');
}).catch(()=>{
    console.log('Error!');
})

promiseTimeout(2000).then(()=>{
    console.log('done');
    promiseTimeout(1000);
}).then(()=>{
    console.log('Also done');
}).catch(()=>{
    console.log('Error!');
})

promiseTimeout(2000).then(()=>{
    console.log('Third done');
    promiseTimeout(1000);
}).then(()=>{
    console.log('third Also done');
    return Promise.resolve(42);
}).then((result)=>{
    console.log(result);
}).catch(()=>{
    console.log('Error!');
});