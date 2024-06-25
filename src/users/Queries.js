// Queries

const getUsersQ = "SELECT * FROM users"
const getUserByIDQ = "SELECT * FROM users WHERE id = $1"
const checkIfUsernameExits = "SELECT u.username FROM users as u WHERE u.username = $1"
const createUserQ = "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *"
const deleteByIDQ = "DELETE FROM users WHERE id = $1"
const updateUserByIDQ = "UPDATE users SET username = $1 WHERE id = $2"

// Export Zone

const Queries = {
    getUsersQ,
    getUserByIDQ,
    checkIfUsernameExits,
    createUserQ,
    deleteByIDQ,
    updateUserByIDQ,
}

export default Queries