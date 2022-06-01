// While Loops
const names = ['justin', 'kumar', 'data'];
let index = 0;
while(index <names.length){
    const name = names[index];
    console.log(name);
    index ++;
}
for(let index =0;index<names.length;index++){
    const name = names[index];
    console.log(name);
}
for(let name of names){
    console.log(name);
}