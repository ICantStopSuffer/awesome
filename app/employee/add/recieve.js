"use server";

import EmployeeRepository from "@/modules/repositories/EmployeeRepository";

export async function employeeAddSubmit(fromData) {

    console.log("test")
    const name = fromData.get("name")
    const department = fromData.get("department")
    const sk = fromData.get("skills")
    const sk2 = fromData.get("projects")

    console.log(typeof(sk))
    console.log(typeof(sk2))

    for (const k of sk) {
        console.log(k)
    }

    for (const k of sk2) {
        console.log(k)
    }
    //EmployeeRepository.insert(name, department)
}
