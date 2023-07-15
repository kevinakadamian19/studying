// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    console.log(arr);
    if(!arr.length) {
        return 1;
    }
    
    let product = arr[0] * productOfArray(arr.slice[0]);
    //               1                       [2,3]
    
    return product;
}

console.log(productOfArray([1,2,3]));