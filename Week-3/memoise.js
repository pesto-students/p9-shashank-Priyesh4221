'use strict';
let computedResult = {};

function add(a,b) {
    return a+b;
}

function memoize(fn,a,b) {
    let key = a+"_"+b;
    if(computedResult[key] == undefined) {
        computedResult[key] = fn(a,b);
    } else {
        console.log('\n\nDelivering from cache');
    }
    return computedResult[key];
}

console.log(memoize(add,2,3));
console.log(memoize(add,2,3));
console.log(memoize(add,2,3));