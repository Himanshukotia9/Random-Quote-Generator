import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


export default function App() {
  const[quote, setQuote] = useState("");
  const[author, setAuthor] = useState("");

  const fetchQuotes = async () => {
    try{
      const res  = await fetch('https://api.quotable.io/random')
      const data = await res.json();
      setQuote(data.content);
      setAuthor(data.author);
      }catch(err){
        console.log("Error fetching quotes: ",err);
      }
    };
    useEffect(() => {
      fetchQuotes();
    },[])

  return (
    <div className='flex flex-col text-center items-center justify-center min-h-screen font-serif w-[90vw] max-w-lg mx-auto'>
      <h1 className='text-2xl md:text-6xl text-center mx-5 bg-[#B85042] py-5 px-16 text-white font-bold w-full rounded-t-lg'>Ruote Generatorandom Q</h1>
      <div className='bg-[#A7BEAE] p-5 w-full rounded-b-lg'>
        <div id='' className='flex flex-col items-center justify-center pb-3 w-3/4 mx-auto'>
          <p id='' className='font-bold text-slate-800'>{quote}</p>
          <p className='text-slate-700'>~ {author}</p>
        </div>
        <div id='' className='flex flex-col items-center justify-center gap-1'>
          <button className='text-white bg-[#B85042] hover:bg-[#a83324] font-bold font-sans rounded-lg text-sm px-5 py-2 m-1' onClick={fetchQuotes}>Generate</button>
        </div>
      </div>
    </div>
  )
}
