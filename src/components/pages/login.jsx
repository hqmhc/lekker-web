import logo from "../login.png";

export default function Login() {
    return (
      <>
       
        <div className="flex h-screen px-20 border border-2 border-gray-300">
        <div className="relative hidden w-0 flex-1 lg:block">
            <img
              className="absolute inset-0 h-full w-full pt-10 pb-10 rounded-md"
              src={logo}    alt=""
            />
          </div>
          <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6  bg-gray-100 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className=" flex justify-center ">
                      <img className="" src="https://emoji.slack-edge.com/T5NAQ62LC/lekkerinvoice/95f785fbc903315b.png"/>
                    </div>
  
              <div className="">
                
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
                        Log in
                      </button>
                    </div>
  
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-blue-400 py-2 px-3 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign up
                      </button>
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