import Sidebar from "@/modules/sidebar";
import Link from "next/link";
import SkillRepository from "@/modules/repositories/SkillRepository";

export default async function removeSkill({params}) {
    const id = (await params).id;

    const employee = await SkillRepository.remove(id)

    return (
        <Sidebar>
        </Sidebar>
    )
}