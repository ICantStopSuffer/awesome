import Sidebar from '@/modules/sidebar';
import Link from 'next/link';
import './page.css'
import SkillRepository from '@/modules/repositories/SkillRepository';

export default async function skillList() {

    const result = await SkillRepository.getAll()

    return (
        <Sidebar>
            <Link href="/skill/add">
                <strong>Add</strong>
            </Link>
            <br/>
            <ul>
                {result.map(async (project) => (
                    <li key={project.id}> 
                        <div className='card'>
                            name: {project.name}
                            <br/>
                            <Link href = {"/skill/" + project.id + "/edit"}>
                                <strong>Edit</strong>
                            </Link>
                            <br/>
                            <Link href = {"/skill/" + project.id + "/remove"}>
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
