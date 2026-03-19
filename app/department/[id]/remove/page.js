import DepartmentRepository from "@/modules/repositories/DepartmentRepository";
import Sidebar from "@/modules/sidebar";
import Link from "next/link";

export default async function removeSkill({params}) {
    const id = (await params).id;

    const employee = await DepartmentRepository.remove(id)

    return (
        <Sidebar>
        </Sidebar>
    )
}