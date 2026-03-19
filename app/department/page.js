import Sidebar from '@/modules/sidebar';
import Link from 'next/link';
import './page.css'
import DepartmentRepository from '@/modules/repositories/DepartmentRepository';

export default async function departmentList() {

    const result = await DepartmentRepository.getAll()

    return (
        <Sidebar>
            <Link href="/department/add">
                <strong>Add</strong>
            </Link>
            <br/>
            <ul>
                {result.map(async (project) => (
                    <li key={project.id}> 
                        <div className='card'>
                            name: {project.name}
                            <br/>
                            <Link href = {"/department/" + project.id + "/edit"}>
                                <strong>Edit</strong>
                            </Link>
                            <br/>
                            <Link href = {"/department/" + project.id + "/remove"}>
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
