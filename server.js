import express from 'express'
import path from 'path'
import cors from 'cors'
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';


import { connectMongoClient, getMongoClient } from './database/MongoBD.js'
import { verifyAccessToken } from './controllers/jwt.Controller.js';
import refreshTokenRouter from './routes/jwt.refresh.Routes.js'
import corsOptions from './config/cors_options.js';
import errorHandler from './middleware/errorHandler.js'
import notFound from './middleware/notFound.js'
import indexRouter from './routes/index.Routes.js'
import authRouter from './routes/auth.Routes.js'
import userRouter from './routes/user.Routes.js'

const server = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const port = process.env.PORT || 5000

let database
connectMongoClient((error) => {
    if (!error) {
        server.listen(port, () => {
            console.log(`App listening on port ${port}`)
        })
        database = getMongoClient()
    }
})

server.use(cors(corsOptions))
server.use(express.json())
server.use(cookieParser())
server.use(express.urlencoded({extended: false}))
server.use(morgan('dev'))
server.use(express.static(path.join(__dirname, 'client', 'build')));

server.use('/', indexRouter)
server.use('/api/v1/auth', authRouter)

server.use('/refresh', refreshTokenRouter)
server.use(verifyAccessToken)
server.use('/api/v1/users', userRouter)

server.use(notFound)
server.use(errorHandler)

export { server, database }
