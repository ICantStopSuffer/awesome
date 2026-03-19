import sql from '@/modules/db';

async function get(id) {
    const result = await sql`select * from Departments where id = ${id}`

    return result[0]
}

async function getAll() {
    const result = await sql`select * from Departments`

    return result
}

async function insert(name) {
    const result = await sql`insert into Departments(name) values ( ${name} )`

    return result[0]
}

async function remove(id) {
    const result = await sql`DELETE FROM Departments WHERE id = ${id};`

    return result[0]
}

async function update(id, name) {
    const result = await sql`UPDATE Departments
    SET name = ${name}
    WHERE id = ${id};`

    return result[0]
}

export default {get, getAll, insert, remove, update}