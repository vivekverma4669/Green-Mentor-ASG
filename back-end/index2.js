const person={
    name:'vivek',
    age:21,
    hello: 'hello'
}
for(let [x,y] of Object.entries(person)){
    console.log(x,y);
}
