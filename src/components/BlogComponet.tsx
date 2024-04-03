'use client'
import Image from 'next/image';
import React from 'react';
import gemini from "../../public/images/gemini.jpeg";
import { useRouter } from "next/navigation"

const BlogComponent = () => {
    const router = useRouter()
  return (
    <button className="max-w-sm mx-auto bg-transparent backdrop-blur-lg border border-transparent border-gradient bg-clip-padding rounded-lg p-5 shadow-lg"
        onClick={() => router.push("/blog")}>
      <h1 className="text-white text-xl font-bold">Conversing with AI: Exploring the Depths of ChatGPT</h1>
      <Image src={gemini} alt="Gemini Image" width={300} height={300} className="mx-auto"></Image>
      <h3 className="text-white text-left">by Akash Padmanabhan</h3>
      <h3 className="text-white text-left">1 April 2024</h3>
    </button>
  )
}

export default BlogComponent;






//import gemini from "../../public/images/gemini.jpeg";


