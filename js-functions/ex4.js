let calculator = {
    add(x,y){
        return x+y
    },
    substract(x,y){
        return x-y
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.substract(30, 9)

console.log(calculator.add(result1, result2))