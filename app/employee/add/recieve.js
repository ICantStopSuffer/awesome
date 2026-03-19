"use server";

import EmployeeRepository from "@/modules/repositories/EmployeeRepository";

export async function employeeAddSubmit(fromData) {

    console.log("test")
    const name = fromData.get("name")
    const department = fromData.get("department")

    EmployeeRepository.insert(name, department)
}
