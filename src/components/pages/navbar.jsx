
import React from 'react';
//import React, { useState } from 'react'; 


export const Navbar = () => (


  <header  className='sticky top-0 z-50 px-10 bg-white text-white'>

<div className="flex px-10 py-3  ">
        
        <div className=" flex px-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-4 h-4">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-4 h-4">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-4 h-4">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-4 h-4">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" class="w-4 h-4">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
</svg>
</div>
<h1 className='text-md text-gray-900 font-thin px-3'>"With LekkerInvoice, payments can be made online from anywhere."-Mitchell Mutandah</h1>
</div>


    <div className="wrapper text  px-5  ">
<div className="flex items-center h-6 px-10  justify-between  py-10">
  <div className="flex py-10">
                  <img
                    className="flex h-20 mb-10 w-auto rounded-full"
                    src="https://emoji.slack-edge.com/T5NAQ62LC/lekkerinvoice/95f785fbc903315b.png"
                    alt=""
                  />
               
                  </div>
                
                <div className=" flex justify-end px-5 h-10 mb-8 w-20 justify-end space-x-8 text-xl ">

                <a href="/" className="inline-flex items-center text-gray-700 hover:text-blue-500">Home</a>
                 
               
                  <a href="/features" className="inline-flex items-center  text-md  text-gray-700 hover:text-blue-500">Features</a>
                  



                  <a href="/mailto:team@lekkerinvoice.co.za" className="inline-flex items-center text-md  text-gray-700 hover:text-blue-500">Contacts</a>

                  <a href="/pricing" className="inline-flex items-center  text-md  text-gray-700 hover:text-blue-500">Pricing</a>
                  
                  <div className="flex flex-shrink-0 items-center">
            
                  <a href="https://beta.lekkerinvoice.co.za" className="inline-flex items-center  text-md  text-gray-700 hover:text-blue-500">Login</a>
                 
            </div>

                  <div className="flex flex-shrink-0 items-center">
                  
                  <img
                    className="hidden h-4 w-auto lg:block"
                    src="http://geo5.net/imagens/Bandeira-da-Africa-do-Sul.png"
                    alt=""
                  />
                </div>
                  <div className="flex flex-shrink-0 items-center">
            
                        </div>
                  <div className="flex flex-shrink-0 items-center">
            
        <a href="https://beta.lekkerinvoice.co.za"
        className="rounded-md bg-blue-400 py-1.5 w-26 mr-4 px-3 text-xl text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      
        SIGN UP
      </a>
      </div>
      </div>
        
        </div>
      
        </div>
  </header>
);

