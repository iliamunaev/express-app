const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Tests passed successfully!</h1>' +
      '<a href="https://www.youtube.com/watch?v=KXw8CRapg7k&ab_channel=QueenVEVO">Queen - We Are The Champions</a>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
