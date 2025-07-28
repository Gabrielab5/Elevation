
const getRandomWord = function (callback) {
    let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']

    // using setTimeout to simulate an async operation that takes time
    setTimeout(() => {
        callback(words[Math.floor(Math.random() * words.length)])
    }, 1000);
}

function checkLuckyNumber(num) {
  // TODO: Create and return a promise that:
  // 1. Waits 800ms (use setTimeout)
  // 2. Resolves with "Lucky!" if number is divisible by 7
  // 3. Resolves with "Not lucky" for other positive numbers
  // 4. Rejects with Error("Invalid number") if number is negative or zero
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(num > 0){
            if (num%7==0) resolve('Lucky!')
            else resolve('Not Lucky!')
        }
        else reject(new Error("Invalid number"))       
    }, 800);
  })
}

checkLuckyNumber(2)
.then(message => { console.log(message)})
.catch(error => { console.log(error)})

checkLuckyNumber(-2)
.then(message => { console.log(message)})
.catch(error => { console.log(error)})