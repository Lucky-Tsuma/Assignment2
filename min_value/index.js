function findMinimum(arr) {
    let min = Infinity;
    for (item of arr) {
        if(typeof (item) === "number"){
            if(item < min) {
                min = item;
            }
        }
    }
    console.log(min);
}

findMinimum([12, 5, "23", 7, "string"]);