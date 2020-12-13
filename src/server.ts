import express,{Request,Response} from 'express'
import cors from 'cors'

const app = express()
const port = 3333

app.use(express.json())
//app.use(cors())

app.use('/',(req:Request,res:Response)=>{
    res.json({"ola":"mundo"})
})

app.listen(port,()=>{
    console.log(`server has started at port  ${port}`)
})