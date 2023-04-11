import React from 'react';
import { useFormspark } from "@formspark/use-formspark";
import {ReactComponent as Icon} from '../../components/ComingSoonHeroSection/icon.svg';

const FORMSPARK_FORM_ID = "Lwftybl1";

export default function HeroSection() {

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [email, setEmail] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ email });
    if(email) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000)
    }
    setEmail('')
  };
  
  return (
    <div className="bg-white">
      <div className="overflow-hidden lg:relative lg:py-36">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div>
              <Icon height={60} width={75} className="mb-10" />
            </div>
            <div className="mt-10">
              <div className="inline-flex space-x-4">
                <span className="rounded bg-indigo-50 px-2.5 py-1 text-2xl font-semibold text-indigo-600 tracking-wide uppercase">
                  Now in beta
                </span>
              </div>
              <div className="mt-2 sm:max-w-xl">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Business invoicing software you'll love!
                </h1>
                <p className="mt-2 text-xl text-gray-500">
                  Have your clients pay with their card or instant EFT using simple, affordable and secure payment processing <b>directly</b> to your Yoco or PayFast account.
                </p>
                <p className="mt-2 text-xl text-gray-500">
                  Defeat EFT Fraud and eliminate transfer delays for good.
                </p>
              </div>
              <div className="mt-4">
                <a
                  className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
                  href="https://beta.lekkerinvoice.co.za/register?utm_source=marketing&utm_medium=hero&utm_content=cta"
                >
                  Start free. No card required
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    aria-hidden="true" 
                    className="ml-2 h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                    </path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
              </svg>
            </div>
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
            <img
                className="absolute inset-0 w-full h-3/4 object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR79BFBTs95GgZBnc9f6tTPOPmUQJU8NkcBeQ&usqp=CAU" alt=""
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}