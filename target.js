function searchSum(arr, target) {
    let result = [];
    let index = 0; 
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result[index] = [arr[i], arr[j]]; 
                index++;
            }
        }
    }
    
    return result;
}

let arr = [2,7,5,4,0,9,1,8,3,3,3];
let target = -1;

let result = searchSum(arr, target);
console.log(result); 