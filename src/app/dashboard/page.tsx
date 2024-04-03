import { currentUser } from '@clerk/nextjs';
import { Exo_2, Comfortaa, Bitter } from 'next/font/google';
import Link from 'next/link';

const exo2 = Exo_2({ subsets: ['latin'], weight: '400' });
const comfortaa = Comfortaa({ subsets: ['latin'], weight: '400' });
const bitter = Bitter({ subsets: ['latin'], weight: '400' });

export default async function Dashboard() {
  const user = await currentUser();
  if (user) console.log(user);
  if (!user) return <div>Not signed in</div>;

  return (
    <div className='ml-20 text-white mt-20'>
      <h1 className="text-4xl text-white font-bold mt-20">
        <span className={`${comfortaa.className}`}>Hello</span> <span className={`text-5xl ${exo2.className} bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500`}>{user?.firstName}</span>
      </h1>
    </div>
  );
}
