// function removeDuplicates(arr) {
//     let distints = [... new Set(arr)];
//     console.log(distints);
// }

function removeDuplicates(arr) {
    let result = [];
    for(item of arr) {
        if(!(result.includes(item))) {
            result.push(item);
        }
    }
    console.log(result);
}

removeDuplicates([1, 3, 5, 3, 7, 3, 1, 1, 5]);