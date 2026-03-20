import sql from '@/modules/db';

async function get(id) {
    const result = await sql`select * from Employees where id = ${id}`

    return result[0]
}

async function getAll() {
    const result = await sql`select * from Employees`

    return result
}

async function insert(name, department) {
    const result = await sql`insert into Employees(name, department) values ( ${name}, ${department} )`

    return result[0]
}

async function remove(id) {
    const result = await sql`DELETE FROM Employees WHERE id = ${id};`

    return result[0]
}

async function update(id, name, department) {
    const result = await sql`UPDATE Employees
    SET name = ${name}, department = ${department}
    WHERE id = ${id};`

    return result[0]
}

export default {get, getAll, insert, remove, update}