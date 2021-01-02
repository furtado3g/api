import {Router} from 'express'
import User from './controllers/users'

const routes = Router();
//user routes
routes.post('/users',User.create)

export default routes
