import { pool } from "../../db.js";
import Queries from "./Queries.js";

// Functions

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


// Export Zone

const Controller = {
    GetUsers,
    GetUserByID,
    CreateUser,
}

export default Controller
