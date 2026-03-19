"use server";

import SkillRepository from "@/modules/repositories/SkillRepository";

export async function skillUpdateSubmit(fromData) {

    
    const id = fromData.get("id")
    const name = fromData.get("name")

    SkillRepository.update(id, name)
}
