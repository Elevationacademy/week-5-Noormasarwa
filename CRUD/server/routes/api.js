const express = require('express')
const router = express.Router()

let wordCounter = {}
// ex1
router.get('/sanity', function (req, res) {
    res.send("server run")
})
// end ex1
// ex2
router.get('/word/:word', function (req, res) {
    const word = req.params.word
    const wordCounterr = wordCounter[word]

    if (word in wordCounter)
    {
        res.send({ count: wordCounterr })
    }
    else
        res.send({ count: 0 })
})
// end ex2
// ex3
router.post('/word', function (req, res) {
    const word = req.body.word

    if (word in wordCounter)
    {
        wordCounter[word]++;
    }
    else
    {
        wordCounter[word] = 1;
    }
    res.send({ text: `added ${word}`, count: wordCounter[word] })
}
)
// end ex3

// ex4

router.post('/words/:sentence', function(req, res) {
	    
        let words = req.params.sentence.split(" ")
        let NewWords = 0
        let OldWords = 0
    

        for(let word of words) {
            if(wordCounter[word]) {
                wordCounter[word]++
                OldWords++
            } else {
                wordCounter[word] = 1
                NewWords++
            }
        }
    

        res.send({text: `Added ${NewWords} words, ${OldWords} already existed.`, currentCount: -1})
    })

// end ex4