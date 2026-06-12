import { User } from '../models/User.js'
import { createCollectionRouter } from './createCollectionRouter.js'

export const usersRouter = createCollectionRouter('users', User)