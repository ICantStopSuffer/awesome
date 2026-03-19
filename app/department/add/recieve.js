"use server";

import DepartmentRepository from "@/modules/repositories/DepartmentRepository";

export async function skillAddSubmit(fromData) {
    const name = fromData.get("name")

    DepartmentRepository.insert(name)
}
