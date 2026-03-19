import EmployeeRepository from "@/modules/repositories/EmployeeRepository";
import DepartmentRepository from '@/modules/repositories/DepartmentRepository';
import Sidebar from "@/modules/sidebar";
import Link from "next/link";

export default async function getEmployeeId({params}) {
    const id = (await params).id;

    const employee = await EmployeeRepository.remove(id)

    return (
        <Sidebar>
        </Sidebar>
    )
}