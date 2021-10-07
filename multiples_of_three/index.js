function multiplesOfThree(range) {
    for(let x = range; x >0 ; x--) {
        if(x % 3 == 0){
            console.log(x);
        }
    }
}

multiplesOfThree(100);