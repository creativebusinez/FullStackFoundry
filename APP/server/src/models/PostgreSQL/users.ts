import bcrypt from 'bcrypt';
import pool from '../config/dbConfig';

// Assuming the type for a user object, modify as needed
interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

const getUsers = async (): Promise<User[]> => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
};

// Define the hashPassword function
const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

// Create a user with a hashed password
const createUser = async (username: string, email: string, password: string | number): Promise<User> => {
    // Ensure password is a string
    if (typeof password !== 'string') {
        password = String(password);
    }

    const hashedPassword = await hashPassword(password);
    const result = await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, hashedPassword]
    );
    return result.rows[0];
};

// Retrieve a user by email
const getUserByEmail = async (email: string): Promise<User | undefined> => {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
};

const deleteUser = async (id: number): Promise<void> => {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
};

export { getUsers, createUser, deleteUser, getUserByEmail, hashPassword };
