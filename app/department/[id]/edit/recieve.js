"use server";

import DepartmentRepository from "@/modules/repositories/DepartmentRepository";

export async function skillUpdateSubmit(fromData) {

    
    const id = fromData.get("id")
    const name = fromData.get("name")

    DepartmentRepository.update(id, name)
}
