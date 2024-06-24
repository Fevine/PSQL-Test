import { Pool } from "pg";

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'albi',
    password: 'xe1shil2',
    port: 7185
})
