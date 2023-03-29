
export default function ContactPage(){
    return(
     <div class="relative bg-white">
        <div class="lg:absolute lg:inset-0 lg:left-1/2">
             <img class="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full" src="https://www.textmagic.com/wp-content/uploads/2020/02/Beautiful-woman-with-a-mobile-phone-in-the-street-reading-text-message-with-office-buildings-in-the-background.png" alt=""/>
        </div>
  <div class="pt-16 pb-24 sm:pt-24 sm:pb-32 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
    <div class="px-6 lg:px-8">
      <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
        <h1 class="text-5xl font-bold tracking-tight text-yellow-400">Let's have a talk.</h1>
        <p class="mt-2 text-lg leading-8 text-blue-500">Use the form below to drop us an email</p>
        <form action="#"  class="mt-10">
          <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
              <div class="mt-2.5">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
              <div class="mt-2.5">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div class="mt-2.5">
                <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company</label>
              <div class="mt-2.5">
                <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between text-sm leading-6">
                <label for="phone" class="block font-semibold text-gray-900">Phone</label>
                <p id="phone-description" class="text-gray-400">Optional</p>
              </div>
              <div class="mt-2.5">
                <input type="tel" name="phone" id="phone" autocomplete="tel" aria-describedby="phone-description" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between text-sm leading-6">
                <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">How can we help you?</label>
                <p id="message-description" class="text-gray-400">Max 500 characters</p>
              </div>
              <div class="mt-2.5">
                <textarea id="message" name="message" rows="4" aria-describedby="message-description" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
            <button type="submit" class="rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send message</button>
          </div>
        </form>
        </div>
    </div>
  </div>
</div>
          

                

    );
}
