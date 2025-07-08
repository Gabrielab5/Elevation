function isEven(number){
    if (number%2==0)
        return true;
    else
        return false;
}
function printOdds(arr){
    for(let i=0; i<arr.length;i++){
        if (!isEven(arr[i]))
            console.log(arr[i])
    }
    return
}
arr = [1,2,3,4,5,6,7,8,9]
printOdds(arr)