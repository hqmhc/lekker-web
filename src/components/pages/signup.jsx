import Img from "../signup.png";
 
export default function Signup() {
    return (
      <>
       
        <div className="flex px-10 border border-2 border-gray-300">
        <div className="relative hidden w-0 flex-1 lg:block px-10">
        <section class="isolate overflow-hidden bg-white px-6 lg:px-8">
  <div class="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
    <div class="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36"></div>
    <div class="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center"></div>
    <figure class="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
      <div class="relative col-span-2 lg:col-start-1 lg:row-start-2">
    
          <p>LekkerInvoice has helped us have a good hold on our cash flow. We can keep track of our income and expenditure easily, and we can also create and send professional looking invoices to our clients in no time.</p>
      
      </div>
      <div class="col-end-1 w-16 lg:row-span-4 lg:w-72">
        <img class="rounded-xl bg-indigo-50 lg:rounded-3xl" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80" alt=""/>
      </div>
      <figcaption class="text-base lg:col-start-1 lg:row-start-3">
        <div class="font-semibold text-gray-900">Judith Black</div>
        <div class="mt-1 text-gray-500">CEO of Workcation</div>
      </figcaption>
    </figure>
  </div>
</section>

          </div>
          <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6  bg-gray-100 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
               
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-blue-400">Sign in to your account</h2>
                <p className="mt-2 text-md  text-blue-400">
                  No payment details required- 15 days trial
                  <a href="#" className="font-medium text-blue-400 hover:text-indigo-500 ">
                  
                  </a>
                </p>
              </div>
  
              <div className="mt-8">
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block  text-sm font-medium leading-6 text-blue-400">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
  
                    <div className="space-y-1">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-blue-400">
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
  
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-blue-400"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm  text-blue-400">
                          Remember me
                        </label>
                      </div>
  
                      <div className="text-sm">
                        <a href="#" className="font-medium text-blue-400">
                          Forgot your password?
                        </a>
                      </div>
                    </div>
  
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-blue-400 py-2 px-3 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign in
                      </button>
                    </div>
  
                    <div className=" flex justify-center">
                      <img className="" src="https://emoji.slack-edge.com/T5NAQ62LC/lekkerinvoice/95f785fbc903315b.png"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
         
        </div>
    
      </>
    )
  }