import { Router } from "express";
import * as UserController from '../controllers/UserController'
import { Auth } from './../middlewares/auth';

const router = Router()


// User Controller
router.get('/games',UserController.index)
router.get('/games/:id', UserController.getOne)
router.get('/games/name/:id', UserController.getName)

// Discount Controller

export default router 