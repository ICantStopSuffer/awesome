import sql from '@/modules/db';

async function get(id) {
    const result = await sql`select * from Skills where id = ${id}`

    return result[0]
}

async function getAll() {
    const result = await sql`select * from Skills`

    return result
}

async function insert(name, description) {
    const result = await sql`insert into Skills(name, description) values ( ${name}, ${description})`

    return result[0]
}

async function remove(id) {
    const result = await sql`DELETE FROM Skills WHERE id = ${id};`

    return result[0]
}

async function update(id, name, description) {
    const result = await sql`UPDATE Skills
    SET name = ${name}, description = ${description}
    WHERE id = ${id};`

    return result[0]
}

export default {get, getAll, insert, remove, update}