import Sidebar from '@/modules/sidebar';
import Link from 'next/link';
import ProjectRepository from '@/modules/repositories/ProjectRepository';
import './page.css'

export default async function projectList() {

    const result = await ProjectRepository.getAll()

    return (
        <Sidebar>
            <Link href="/project/add">
                <strong>Add</strong>
            </Link>
            <br/>
            <ul>
                {result.map(async (project) => (
                    <li key={project.id}> 
                        <div className='card'>
                            name: {project.name}
                            <br/>
                            <Link href = {"/project/" + project.id + "/edit"}>
                                <strong>Edit</strong>
                            </Link>
                            <br/>
                            <Link href = {"/project/" + project.id + "/remove"}>
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
