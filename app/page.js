import './page.css'
import Sidebar from '@/modules/sidebar';

export default async function Home() {

  return (
    <Sidebar>
      <p>works!</p>
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
