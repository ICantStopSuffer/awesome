"use server";
import SkillRepository from "@/modules/repositories/SkillRepository";

export async function skillAddSubmit(fromData) {
    const name = fromData.get("name")

    SkillRepository.insert(name)
}
