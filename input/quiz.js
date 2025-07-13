import promptSync from 'prompt-sync'
const prompt = promptSync()

function quiz() {
    let questions = ['1. what is 7*12 ?', '1. what is the year of 9/11 attacks ?', '1. how many fish killed every minute (in average, billions)?' ]
    let answers = []
    let correctAnswers = [84, 2001,3]
    let score =0
    for( let i=0; i<questions.length; i++){
        const input = prompt( questions[i] )
        const answer = parseInt(input)
        answers[i] = answer
        if (answer === correctAnswers[i])
            score++
    }
    
    return score
}
const score = quiz()
console.log(`\nFinal Score: ${score}/3 correct!`)

