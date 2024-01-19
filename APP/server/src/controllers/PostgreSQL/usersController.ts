import * as usersModel from '../models/users';
import { Request, Response } from 'express';

// Assuming the type for a user object, modify as needed
interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

// Get all users
const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await usersModel.getUsers();
        res.json(result.rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Create a user
const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, email, password } = req.body;
        const newUser = await usersModel.createUser(username, email, password);
        const { password: _, ...userData } = newUser.rows[0];
        res.json(userData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Delete a user
const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await usersModel.deleteUser(id);
        res.status(200).send(`User deleted with ID: ${id}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export { getUsers, createUser, deleteUser };
