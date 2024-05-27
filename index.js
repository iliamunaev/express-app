const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>We are the champions!</h1>' +
      '<a href="https://www.youtube.com/watch?v=KXw8CRapg7k&ab_channel=QueenVEVO">Queen - We Are The Champions</a>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
