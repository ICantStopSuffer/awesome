"use server";
import ProjectRepository from "@/modules/repositories/ProjectRepository";

export async function projectUpdateSubmit(fromData) {

    
    const id = fromData.get("id")
    const name = fromData.get("name")

    ProjectRepository.update(id, name)
}
