import DepartmentRepository from '@/modules/repositories/DepartmentRepository';
import EmployeeRepository from '@/modules/repositories/EmployeeRepository';
import Sidebar from '@/modules/sidebar';
import Link from 'next/link';

export default async function employeeList() {

    const result = await EmployeeRepository.getAll();

    return (
        <Sidebar>
            <ul>

                {result.map(async (employee) => (
                    <li key={employee.id}> 
                        <Link href = {"/employee/" + employee.id}>
                            name: {employee.name}
                            <br/>
                            department: {(await DepartmentRepository.get(employee.department)).name}
                        </Link>
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
