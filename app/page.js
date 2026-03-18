import sql from '@/modules/db';
import './page.css'

export default async function Home() {

  const result = await sql`select count(*) from Skills`

  for (let gg of result) {
    console.log(gg)
  }
  return (
    <div>
      {result[0].count}
    </div>
  );
}
