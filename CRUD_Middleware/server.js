const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/sanity', (req, res) => {
  res.send('Server is up and running');
});

app.listen(port, () => {
  console.log(`Word Counter Backend listening at http://localhost:${port}`)
});

const wordCounter = {}

function cleanWord(word){
  return word.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function addWord(word){
  const cleaned = cleanWord(word);
  if (cleaned) wordCounter[word] = (wordCounter[word] || 0) + 1
}

app.get('/word/:word', (req, res) => {
  const word = cleanWord(req.params.word)
  if (wordCounter[word]>0)
    res.send({count: wordCounter[req.params.word]})
  else res.send({count: 0})
})

app.post('/word', (req, res) => {
  const word = req.body.word
  addWord(word)
  res.send({text: `Added ${word}`, currentCount: wordCounter[cleanWord(word)]})
})

app.post('/sentence ', (req, res) => {
  const sentence = req.body.sentence
  const words = sentence.split(' ')
  let numNewWords = 0
  let numOldWords = 0
  
  words.forEach(word => {
    const cleaned = cleanWord(word)
    if (cleaned){
      if (wordCounter[cleaned]) numOldWords++
      else numNewWords++ 
      addWord(cleaned)
    }
  });  
  res.send({text: `Added ${numNewWords} words, ${numOldWords} already existed`, currentCount: -1})
})

app.delete('/word/:word', (req, res)=> {
  const word = cleanWord(req.body.word)
  try {
    if (!word || typeof word !== 'string') {
      return res.status(400).send({text: 'Error: The word parameter must be a non-empty string.'})
    }
    if( wordCounter[word]){
      delete wordCounter[word];
      res.status(200).send({text: `Deleted ${word} from words`})
    } else {
      res.status(401).send({text: `Error: word not found`})
    }
  } catch (err) {
    console.error('An unexpected error occurred:', err)
    return res.status(500).send({text: 'An unexpected server error occurred.'})
  }
})

app.get('/popular', (req, res) => {
  let mostPopularWord = null
  let highestCount = 0

  for (const word in wordCounter) {
    if (wordCounter[word] > highestCount) {
      highestCount = wordCounter[word]
      mostPopularWord = word
    }
  }
  res.send({text: mostPopularWord, count: highestCount})
})

app.get('/ranking', (req, res) => {
  const wordArray = Object.entries(wordCounter);
  wordArray.sort((a, b) => b[1] - a[1]);
  const top5 = wordArray.slice(0, 5);
  const ranking = top5.map(([word, count]) => ({[word]: count}));
  res.send({ ranking: ranking});
});


app.get('/total', (req, res) => {
  const counts = Object.values(wordCounter)
  const sum = counts.reduce((total, count) => total + count, 0)
  res.send({text: "Total count",count: sum});
});