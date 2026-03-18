import postgres from 'postgres'

const sql = postgres({
  host: 'localhost',
  port: 5432,
  database: 'portal',
  username: 'postgres',
  password: 'admin',
})

export default sql