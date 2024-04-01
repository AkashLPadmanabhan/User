import { Exo_2, Comfortaa } from 'next/font/google';

const exo2 = Exo_2({ subsets: ['latin'], weight: '400' });
const comfortaa = Comfortaa({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <div className="ml-20 text-white mt-10">
      <h1 className="text-4xl font-bold mb-10">
       <span className={`${comfortaa.className}`}>Welcome to</span> <span className={`text-5xl ${exo2.className} bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500`}>Clerk Auth</span>
      </h1>
      <div className="mt-20 p-4 border border-indigo-500 rounded-lg bg-black bg-opacity-25 max-w-lg">
        <p className={`${exo2.className}`}>
        Clerk is a user authentication platform that seamlessly integrates with Next.js, simplifying user sign-up, login, and password reset processes. 
        By incorporating Clerk into a Next.js project, developers can easily manage user accounts and permissions without building these features from scratch. 
        Clerk provides secure authentication components like SignIn and SignUp, enabling developers to focus on core application features while ensuring a seamless user experience.
         Integrating Clerk with Next.js involves setting up authentication components and configuring the authentication flow based on the application's needs. Overall,
          Clerk authentication in Next.js offers a convenient and robust solution for enhancing application security and usability effortlessly.</p>
      </div>
    </div>
  );
}
