const findDuplicates = function (arr) {
    let duplicates = {}
    for (let i = 0; i < arr.length; i++) {
        if(duplicates[arr[i]]) duplicates[arr[i]]++
        else duplicates[arr[i]]=1 
    }
    for (let i = 0; i < arr.length; i++) {
        if(duplicates[arr[i]]>1){
            console.log(arr[i] +" has a duplicate!")
            duplicates[arr[i]]=0
        }
    }
}

findDuplicates([1,1,2,2,3,5,3])