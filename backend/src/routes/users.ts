import { Router } from 'express';
import { getUsers, getUserById, createUser } from '../controllers/userController';

export const usersRouter = Router();

// Get all users
usersRouter.get('/', getUsers);

// Get single user by ID
usersRouter.get('/:id', getUserById);

// Create new user
usersRouter.post('/', createUser);

