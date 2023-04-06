import Img from "../signup.png";

export default function Signup() {
    return (
      <>
       
        <div className="flex px-10">
        <div className="relative hidden w-0 flex-1 lg:block px-10">
            <img
              className="absolute inset-0 h-full w-full object-cover rounded-md"
              src={Img}      alt=""
            />
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