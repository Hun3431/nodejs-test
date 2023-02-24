const express = require('express')
const app = express()
const port = 3000   

// cors설정
const cors = require('cors')
app.use(cors())

//get방식으로 들어온 정보를 받는다.
app.get('/', (req, res) => {
    res.send('Hello World')
})

//get방식으로 변수 받기
app.get('/user/:id', (req, res) => {
    const q = req.params
    console.log(q)
    const p = req.query
    console.log(p)

    res.json({'userid': p.id}) 
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    console.log(name)
    if(name == 'dog') {
        res.json({'sound':'멍멍'})
    } else if(name == 'cat') {
        res.json({'sound':'야옹'})
    } else if(name == 'pig') {
        res.json({'sound':'꿀꿀'})
    } else {
        res.json({'sound':'알수없음'})
    }
})

app.listen(port, () => {
    console.log('Example app listening on port ', port)
})