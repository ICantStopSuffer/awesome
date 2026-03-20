import sql from '@/modules/db';

async function get(id) {
    const result = await sql`select * from Projects where id = ${id}`

    return result[0]
}

async function getAll() {
    const result = await sql`select * from Projects`

    return result
}

async function getProjectsFromEmployee(id) {
    const result = await sql`select projects.id, projects.name from Projects join ProjectEmployeeBridge on Projects.id = ProjectEmployeeBridge.project where ProjectEmployeeBridge.employee = ${id}`

    return result
}

async function insert(name) {
    const result = await sql`insert into Projects(name) values ( ${name})`

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

async function insertProjectEmployeeBridge(employee, project) {
    const result = await sql`insert into ProjectEmployeeBridge(employee, project) values ( ${employee}, ${project})`

    return result[0]
}

async function removeProjectEmployeeBridge(employee, project) {
    const result = await sql`DELETE FROM ProjectEmployeeBridge WHERE employee = ${employee} and project = ${project};`

    return result[0]
}

export default {get, getAll, insert, remove, update, getProjectsFromEmployee, insertProjectEmployeeBridge, removeProjectEmployeeBridge}