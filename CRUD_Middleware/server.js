const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/sanity', (req, res) => {
  res.send('Server is up and running');
});

app.listen(port, () => {
  console.log(`Word Counter Backend listening at http://localhost:${port}`);
});

const wordCounter = {}

app.get('/word/:word', (req, res) => {
  const word = req.params.word
  if (wordCounter[word]>0)
    res.send({count: wordCounter[req.params.word]})
  else res.send({count: 0})
})

app.post('/word', (req, res) => {
  const word = req.body.word
  addWord(word)
  res.send({text: `Added ${word}`, currentCount: wordCounter[word]})
})

function addWord(word){
  wordCounter[word] = (wordCounter[word] || 0) + 1;
}

app.post('/sentence ', (req, res) => {
  const sentence = req.body.sentence
  const words = sentence.split(' ')
  let numNewWords = 0
  let numOldWords = 0

  words.forEach(word => {
    if (wordCounter[word]) numOldWords++
    else numNewWords++ 
    word = addWord(word)
  });
  
  res.send({text: `Added ${numNewWords} words, ${numOldWords} already existed`, currentCount: -1})
})

app.delete('/word/:word', (req, res)=> {
  const word = req.body.word

  if( wordCounter[word]){
    delete wordCounter[word];
    res.status(200).send({text: `Deleted ${word} from words`})
  } else {
    res.status(401).send({text: `Error: word not found`})
  }
})