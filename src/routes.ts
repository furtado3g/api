import {Router} from 'express'
import User from './controllers/users'

const routes = Router();
//user routes
routes.post('/users',User.create)
routes.get('/users',User.userDetailToConfimation)
//activate user route
routes.put('/activate/:id',User.activate)
export default routes
