import DepartmentRepository from '@/modules/repositories/DepartmentRepository';
import EmployeeRepository from '@/modules/repositories/EmployeeRepository';
import Sidebar from '@/modules/sidebar';
import Link from 'next/link';
import './page.css'

export default async function employeeList() {

    const result = await EmployeeRepository.getAll();

    return (
        <Sidebar>
            <Link href="/employee/add">
                <strong>Add</strong>
            </Link>
            <br/>
            <ul>
                {result.map(async (employee) => (
                    <li key={employee.id}> 
                        <div className='card'>
                            <Link href = {"/employee/" + employee.id}>
                                name: {employee.name}
                                <br/>
                                department: {(await DepartmentRepository.get(employee.department)).name}
                            </Link>
                            <br/>
                            <Link href = {"/employee/" + employee.id + "/edit"}>
                                <strong>Edit</strong>
                            </Link>
                            <br/>
                            <Link href = {"/employee/" + employee.id + "/remove"}>
                                <strong>Remove</strong>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </Sidebar>
    );
}

/*<ul>
        {result.map((user) => (
          <li key={user.id}> 
            <strong>{user.name}</strong>
          </li>
        ))}
      </ul> */
