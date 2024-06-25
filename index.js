import express from 'express'
import cors from 'cors'
import { router } from './src/users/Routes.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/users', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})