//Promises
var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
     const num = Math.random();
     if (num > 0.5) {
      resolve('Success!  ' + num); }
     else (reject('Failure!  ' + num));
    }, 500);
   });
   promise.then(function success(data) {
    console.log(data);
   }, function error(data) {
    console.error(data);
   });


   console.log("");

//Default Parameters
function createA() {
    return 5;
}

function add(a = createA(), b = a+2, c = b+3) {
    console.log(a+b+c);
    return a+b+c;
}

add();
add(2);
add(2,3);
add(2,3,1);

function createX() {
    return 3;
}

function multiply(x = createX(), y = x*2, z = y*3) {
    console.log(x*y*z);
    return x*y*z;
}

multiply();
multiply(2);
multiply(2,3);
multiply(2,3,1);

//Rest Parameters
console.log("");

//Allows for any number of arguments and adds them all together
function addNumbersTogether(...thearguments) {
    // let arr = [];
    // for(i=0; i<thearguments.length; i++) {
    //     arr.push(i);
    // }
    // console.log(arr);
    let sum = 0;
    // let sum2 = 0;

    for(let arg of thearguments) sum += arg;
    // sum2 = arr.reduce();

    return sum;
    // return sum2;
}

console.log(addNumbersTogether(1,2));
console.log( addNumbersTogether(2,3,2));
console.log(addNumbersTogether(1,2,3,4,5,6,7,8,9,10));

