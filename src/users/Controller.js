import { pool } from "../../db.js";
import Queries from "./Queries.js";

// Functions

// Get

async function GetUsers(req, res) {
    try {
        const users = await pool.query(Queries.getUsersQ)
        res.status(200).json(users.rows)
    } catch (error) {
        res.status(500).send('Something went wrong!')
    }
}

function GetUserByID(req, res) {
    const id = parseInt(req.params.id)
    pool.query(Queries.getUserByIDQ, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}


// Post

async function CreateUser(req, res) {
    try {
        const { username, password } = req.body
        // Check if User exists
        const foundUser = await pool.query(Queries.checkIfUsernameExits, [username])
        if (foundUser.rows.length) {
            res.send(`${foundUser.rows[0].username} is already taken!`)
            return
        }
        const newUser = await pool.query(Queries.createUserQ, [username, password])
        res.status(200).json(newUser.rows)
    } catch (error) {
        res.status(500).send('Something went wrong!')
    }
}


// Delete

async function DeleteUserByID(req, res) {
    try {
        const { id } = req.params

        const deletedUser = await pool.query(Queries.deleteByIDQ, [id])
        if (!deletedUser) {
            res.send("User doesn't exists!")
            return
        }
        res.send("User deleted successfully!")
    } catch (error) {
        res.status(500).send('Something went wrong!')
    }
}


// Put

async function UpdateUserByID(req, res) {
    try {
        const { id } = req.params
        const { username } = req.body
        const user = await pool.query(Queries.getUserByIDQ, [id])
        if (!user.rows.length) {
            res.status(406).send("User doesn't exists!")
            return
        }

        const updatedUser = await pool.query(Queries.updateUserByIDQ, [username, id])

        res.json(`${user.rows[0].username} username updated to ${username}!`)
    } catch (error) {
        res.status(500).send('Something went wrong!')
    }
}


// Export Zone

const Controller = {
    GetUsers,
    GetUserByID,
    CreateUser,
    DeleteUserByID,
    UpdateUserByID,
}

export default Controller
