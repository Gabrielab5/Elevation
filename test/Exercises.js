class Exercises {
//should return true if n is even, false otherwise
isEven(n) {
    return n % 2 == 0 ? true : false
}

//should remove at least one element from the array `arr`
removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
    arr.splice(0, numItemsToRemove)
    return arr
}

//should return a clean string without these symbols: "!", "#", ".", ",", "'"
simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"]
    return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
}
}

module.exports = Exercises