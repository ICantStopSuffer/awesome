import sql from '@/modules/db';

async function get(id) {
    const result = await sql`select * from Skills where id = ${id}`

    return result[0]
}

async function getAll() {
    const result = await sql`select * from Skills`

    return result
}

async function getSkillsFromEmployee(id) {
    const result = await sql`select Skills.id, Skills.name from Skills join SkillEmployeeBridge on Skills.id = SkillEmployeeBridge.skill where SkillEmployeeBridge.employee = ${id}`

    return result
}

async function insert(name) {
    const result = await sql`insert into Skills(name) values ( ${name})`

    return result[0]
}

async function remove(id) {
    const result = await sql`DELETE FROM Skills WHERE id = ${id};`

    return result[0]
}

async function update(id, name) {
    const result = await sql`UPDATE Skills
    SET name = ${name}
    WHERE id = ${id};`

    return result[0]
}

async function insertSkillEmployeeBridge(employee, skill) {
    const result = await sql`insert into SkillEmployeeBridge(employee, skill) values ( ${employee}, ${skill})`

    return result[0]
}

async function removeSkillEmployeeBridge(employee, skill) {
    const result = await sql`DELETE FROM SkillEmployeeBridge WHERE employee = ${employee} and skill = ${skill};`

    return result[0]
}

export default {get, getAll, insert, remove, update, getSkillsFromEmployee, insertSkillEmployeeBridge, removeSkillEmployeeBridge}