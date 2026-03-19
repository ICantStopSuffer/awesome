import EmployeeRepository from "@/modules/repositories/EmployeeRepository";
import DepartmentRepository from '@/modules/repositories/DepartmentRepository';
import ProjectRepository from "@/modules/repositories/ProjectRepository";
import SkillRepository from "@/modules/repositories/SkillRepository";
import './page.css'
import Sidebar from "@/modules/sidebar";
import Link from "next/link";

export default async function getEmployeeId({params}) {
    const id = (await params).id;

    const employee = await EmployeeRepository.get(id)
    const projects = await ProjectRepository.getProjectsFromEmployee(id)
    const skills = await SkillRepository.getSkillsFromEmployee(id)

    return (
        <Sidebar>
            <div>
                <div className="info">
                    <strong>info</strong>
                    <br/>
                    id: {employee.id}
                    <br/>
                    name: {employee.name}
                    <br/>
                    department: {(await DepartmentRepository.get(employee.department)).name}
                </div>

                <div className="info">
                    <strong>projects</strong>
                    {projects.map((project) => (
                        <div key={project.id}>
                            {project.name}
                        </div>
                    ))}
                </div>

                <div className="info">
                    <strong>skills</strong>
                    {skills.map((skill) => (
                        <div key={skill.id}>
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        </Sidebar>
    )
}