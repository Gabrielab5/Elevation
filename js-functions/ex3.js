function checkExists(arr, number){
    for(let num in arr){
        if (num == number)
            return true;
    }
    return false;
}

console.log(checkExists([1, 2, 3], 2))