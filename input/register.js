
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('what is youe name?', (answer) => {  
    const name = answer
        rl.question('what is youe Email?', (answer1) => {  
            const email = answer1
            rl.question('what is youe Age?', (answer2) => {  
                const age = answer2
                rl.question('what is youe Favorite Color?', (answer3) => {  
                    const color = answer3
                   
                    console.log('\nRegistration Summary:');
                    console.log(`Name: ${name}`);
                    console.log(`Email: ${email}`);
                    console.log(`Age: ${age}`);
                    console.log(`Favorite Color: ${color}`);
                    rl.close(); 
            })
        }) 
    })
})
    
