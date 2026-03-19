import ProjectRepository from "@/modules/repositories/ProjectRepository";
import Sidebar from "@/modules/sidebar";
import Link from "next/link";

export default async function removeProject({params}) {
    const id = (await params).id;

    const employee = await ProjectRepository.remove(id)

    return (
        <Sidebar>
        </Sidebar>
    )
}