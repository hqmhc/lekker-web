import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header >
    <div className="wrapper text">
      
        <div className="flex px-10 py-8">
        
        <div className=" flex">
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
<h1 className='text-md text-gray-900 font-thin px-3'>"With LekkerInvoice, payments can be made online from anywhere."-Edard G.,Andreas-Pharmacy</h1>
</div>
</div>

<div className="flex items-center h-6 px-10 mb-16 justify-between ">
  <div className="flex">
                  <img
                    className="flex h-20 mb-10 w-auto"
                    src="https://emoji.slack-edge.com/T5NAQ62LC/lekkerinvoice/95f785fbc903315b.png"
                    alt=""
                  />
                  </div>
                
                <div className=" flex px-12 h-10 mb-8 w-20 justify-end space-x-12">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <div className="flex">
                  <a href="/" className="inline-flex items-center  text-sm font-medium text-gray-700 hover:text-blue-500">Features</a>
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  fill="none" viewBox="0 0 24 24" 
                  strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mt-4 ml-2">
                    <path strokeLinecap="round" 
                    strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

</div>

                  <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-500">Contacts</a>

                  <a href="/" className="inline-flex items-center  text-sm font-medium text-gray-700 hover:text-blue-500">Pricing</a>
                  
            
            <button className="text-gray-700 rounded-md hover:text-gray-900">Login</button>

            <div className="flex flex-shrink-0 items-center">
                  
                  <img
                    className="hidden h-4 w-auto lg:block"
                    src="http://geo5.net/imagens/Bandeira-da-Africa-do-Sul.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-shrink-0 items-center">
                <button
        type="button"
        className="rounded-full bg-blue-400 py-1.5 w-26 mr-10 px-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        SIGN UP
      </button>
      </div>
      </div>
        
        </div>
      
    
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
