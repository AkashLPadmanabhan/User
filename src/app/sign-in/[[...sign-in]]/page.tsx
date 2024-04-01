import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="ml-20 mt-10">
     <SignIn />;
  </div>
}