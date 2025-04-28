import React from 'react'
import { useState,useEffect } from 'react'


const LoadingScreen = ({onComplete}) => {
    const [text, setText] = useState('');
    const fullText = `
        Hey You!`;
    
    useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
        if (index < fullText.length) {
        setText(fullText.slice(0, index+1));
        // setText((prev) => prev + fullText[index]);
        index++;}
        else {
            clearInterval(interval);
            setTimeout(onComplete, 2000)               
        }
    }
    , 100);

    return () => clearInterval(interval);

},[onComplete,fullText]);

  return (
    <div className='fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center'>
        <div className='mb-4 text-4xl font-mono font-bold text-red-500'>
            {text } <span className='text-4xl animate-blink ml-1'></span>

        </div>
        <div className='w-[200px] h-[2px]  bg-gray-800 rounded relative overflow-hidden'>
            <div className='w-[40%]  h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar'></div>

        </div>






    </div>
  )
}

export default LoadingScreen