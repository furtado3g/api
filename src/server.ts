import express,{Request,Response} from 'express'
import cors from 'cors'
import routes from './routes'
const app = express()
const port = 3333

app.use(express.json())
//app.use(cors())

app.use(routes)

app.listen(port,()=>{
    console.log(`server has started at port  ${port}`)
})