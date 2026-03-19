import sql from '@/modules/db';

async function get(id) {
    const result = await sql`select * from Projects where id = ${id}`

    return result[0]
}

async function getAll() {
    const result = await sql`select * from Projects`

    return result
}


async function insert(name) {
    const result = await sql`insert into Projects(name) values ( ${name} )`

    return result[0]
}

async function remove(id) {
    const result = await sql`DELETE FROM Projects WHERE id = ${id};`

    return result[0]
}

async function update(id, name) {
    const result = await sql`UPDATE Projects
    SET name = ${name}
    WHERE id = ${id};`

    return result[0]
}

export default {get, getAll, insert, remove, update}