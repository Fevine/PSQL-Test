import pg from "pg";

const { Pool } = pg

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'albi',
    password: 'xe1shil2',
    port: 7185
})
