"use server";
import ProjectRepository from "@/modules/repositories/ProjectRepository";

export async function projectAddSubmit(fromData) {
    const name = fromData.get("name")

    ProjectRepository.insert(name)
}
