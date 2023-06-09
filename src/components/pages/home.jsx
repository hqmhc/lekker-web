import  React from "@heroicons/react/24/outline";

import { Features } from "./features";
import Pricing from "./pricing";
import Contact from "./contact";
import Signup from "./signup";
import Logo from "../home-logo.png";
import Typewriter from "typewriter-effect";

export default function Home() {
    
    return (
      <>
      <div className="flex border border-gray-300 ">

        <div className="container max-w-2xl py-32 sm:py-48 lg:py-8 px-20 ">
          <div className="aspect-w-4 aspect-h-1">
          <span className=" text-6xl text-left font-bold tracking-tight text-gray-900 sm:text-6xl aspect-w-2 ">
           <Typewriter
            options={{
            strings: ["Business invoicing software, you'll love!"],
            autoStart: true,
            loop: true,
            }}
            /> 
           </span>
         </div>
          <p className="mt-14 text-lg leading-8 text-lime-700">
           LekkerInvoice is, simple, modern and reliable
          </p>
          <div className="flex justify-start py-2 space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-6 h-6 fill-emerald-300">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            <p className="text-slate-700">Invoice with your team </p>
          </div>
          <div className="flex justify-start py-2  space-x-3"> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-emerald-300">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <p className="text-slate-700">Connect your Yoco or PayFast</p>
          </div>
          <div className="flex justify-start py-2  space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-6 h-6 fill-emerald-300">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
            <p className="text-slate-700"> Confirm payments, immediately</p>
          </div>
          <div className="flex justify-start py-2  space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-emerald-300">
                 <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <p className="text-slate-700">Issue Receipts Automatically</p>
          </div>
          <div className="mt-5 flex items-center justify-items-start ">

            <a href="https://app.lekkerinvoice.co.za/register" className="rounded-md py-1 w-60 h-10 bg-blue-400  text-xl  text-center text-white shadow-sm hover:bg-green-500 ">

           
              Start for free
            </a>
          </div>
          <div className="flex -justify-start py-10 space-x-3">
             <p className='text-2xl font-mono animate-bounce'> <span className="font-bold ">Proven </span>Expert</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-6 h-6 text-2xl fill-yellow-300">
             <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-6 h-6 text-2xl fill-yellow-300">
             <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-6 h-6 text-2xl fill-yellow-300">
             <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-6 h-6 text-2xl fill-yellow-300">
             <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-6 h-6 fill-yellow-300 text-2xl">
             <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg> 
          </div>
          </div>

          <div className="container relative aspect-h-2">
         <img class="absolute inset-0 right-0 top-0 h-64 w-full bg-fixed object-cover sm:h-80 lg:absolute lg:h-full rounded-md" src={Logo}/>
           </div>
      </div>
      <Features/>
      <Pricing/>
     

      </>
    
  );
}
