const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let i=0; i < names.length; i++){
    let p ={ name: names[i] , age : ages[i]}
    people[i] = p
}

for(let p of people){
    console.log(`${p.name} is ${p.age} years old`)
}