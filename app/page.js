import SkillRepository from '@/modules/repositories/SkillRepository';
import './page.css'

export default async function Home() {

  const result = await SkillRepository.getAll();

  for (let gg of result) {
    console.log(gg)
  }

  return (
    <div>
      <ul>
        {result.map((user) => (
          <li key={user.id}> 
            <strong>{user.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
