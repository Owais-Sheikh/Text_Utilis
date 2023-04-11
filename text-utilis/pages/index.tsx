/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  // Declare useState for perform different functions
  // It is used to store text in messagebox
const [text, settext] = useState('')

// It showes the number  of words in button
const [showWords, setshowWords] = useState(false)

// It showes the number  of alphabets in button
const [showAlpha, setshowAlpha] = useState(false)

// It counts the number of words in a string
const [countWords, setcountWords] = useState(0)

// It counts the number of alphabets in a string
const [countAlpha, setcountAlpha] = useState(0)

// This function is used for taking value from messagebox
const setVal = (e:any) => {
  e.preventDefault();
  setshowWords(false)
  setshowAlpha(false)
  settext(e.target.value);
}

// This function is used for count words in a string
const wordCount = ()=>{
  var countW:number = 0;
  setshowWords(true);
  for(var i of text){
    if(i == " "){
    countW++;
  }
  }
  setcountWords(countW+1);
}

// This function is used for count alphabets in a string
const AlphabetCount = ()=>{
  var countW:number = 0;
  setshowAlpha(true);
  for(var i of text){
    if(i == " "){
    countW++;
  }
  }
  setcountAlpha(text.length - countW);
}

// It converts the string into UPPERCASE
const upperCase = () => {
  var t:string = text.toUpperCase();
  settext(t);
}

// It converts the string into lowercase
const lowerCase = () => {
  var t:string = text.toLowerCase();
  settext(t);
}

  return (
    <main className="flex min-h-screen flex-col items-center md:p-24 px-10 py-20">
      <div className='flex items-center flex-col text-center md:m-5'>
      <h1 className='md:text-2xl text-xl md:text-indigo-800 text-indigo-500 font-bold mb-20'>Welcome to our website, where we provide top-notch services for text utilization!</h1>
      </div>
      <div className="w-96">
        <div className="relative w-full min-w-[200px]">
          <textarea value={text} typeof='text' onChange={setVal} 
            className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all border-gray-600 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          ></textarea>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-indigo-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Paste the text here 
          </label>
        </div>
      </div>
      <div className='flex justify-around mt-10'>
        <button onClick={wordCount} className='bg-indigo-500 m-3 hover:bg-indigo-800 md:text-sm text-xs p-2 text-white rounded-lg w-32'>{showWords? countWords : "Count Words"}</button>
        <button onClick={AlphabetCount} className='bg-indigo-500 m-3 hover:bg-indigo-800 md:text-sm text-xs p-2 text-white rounded-lg w-32'>{showAlpha? countAlpha : "Count Alphabets"}</button>
        <button onClick={upperCase} className='bg-indigo-500 m-3 hover:bg-indigo-800 md:text-sm text-xs p-2 text-white rounded-lg w-32'>Upper Case</button>
        <button onClick={lowerCase} className='bg-indigo-500 m-3 hover:bg-indigo-800 md:text-sm text-xs p-2 text-white rounded-lg w-32'>Lower Case</button>
      </div>
    </main>
  )
}
