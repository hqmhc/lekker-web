import Logo from "../connect.png";
import Connect from "../send.png";

export const Features = () => {
 
    return (
      
  <div className="px-5 py-3">
    <h className="flex justify-center font-bold text-3xl">Features</h>
     <h className=" flex justify-center text-xl font-medium text-blue-500 italic underline  ">With LekkerInvoice you can :</h>
        <div class="overflow-hidden bg-white  sm:py-10  px-3">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
         
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:ml-auto lg:pl-4 lg:pt-4">
              <div class="lg:max-w-lg">
                <h2 class="text-base font-semibold leading-7 text-blue-500">Invoice faster</h2>
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better invoicing method</p>
                <p class="mt-6 text-lg leading-8 text-gray-600">LekkerInvoice is a feature-rich invoicing software designed for freelancers and small business owners. Whether you're invoicing online or recording offline payments, LekerInvoice has you covered.</p>
                <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div class="relative pl-9">
                    <dt class="inline font-semibold text-gray-900">
                    <svg class="absolute left-1 top-1 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" ><path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                      Connect your Yoco or PayFast account
                    </dt>
                    <dd class="inline">-Invoice payments are processed with your Yoco or PayFast account. Get paid securely with the brands your customers know and trust.</dd>
                  </div>
      
                  <div class="relative pl-9">
                    <dt class="inline font-semibold text-gray-900">
                    <svg class="absolute left-1 top-1 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" ><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                      Invoice with your team 
                    </dt>
                    <dd class="inline">-Work together as a team across departments and branches. Invite collaborators to create invoices together with you.</dd>
                  </div>
      
                  <div class="relative pl-9">
                    <dt class="inline font-semibold text-gray-900">
                    <svg class="absolute left-1 top-1 h-5 w-5 text-blue-500"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" ><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    Confirm Payments Immediately
                    </dt>
                    <dd class="inline">-Card and EFT payments processed with Yoco or PayFast are confirmed immediately. There is no delay, nor possibility of EFT fraud.</dd>
                  </div>
                  
                  <div class="relative pl-9">
                    <dt class="inline font-semibold text-gray-900">
                    <svg class="absolute left-1 top-1 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" ><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>       Issue Receipts Automatically
                    </dt>
                    <dd class="inline "><p>-A receipt is issued automatically when payment is secured, and the invoice is marked as paid.</p></dd>
                  </div>
                  
            
                </dl>
              </div>
            </div>
            <div class="flex items-start justify-end lg:order-first px-5 py-6">
            <img class=" bg-white object-cover  rounded-md border border-2 " src={Logo}/>
             </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white py-10 sm:py-10">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All payments <a class="text-blue-500 underline" href="https://beta.lekkerinvoice.co.za/register">online</a></h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">With LekkerInvoice, creating and sending invoices is a matter of a few clicks.</p>
    </div>
    <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div>
        <dt class="font-semibold text-gray-900">Schedule recurring invoices</dt>
        <dd class="mt-1 text-gray-600">Create recurring invoices for transactions that occur at regular intervals, so you don't have to create them individually every time. </dd>
      </div>

      <div>
        <dt class="font-semibold text-gray-900">Sign your invoices</dt>
        <dd class="mt-1 text-gray-600">Use your digital signature to prevent invoice forgery or tampering. LekkerInvoice LekkerInvoice Sign integration ensures the highest level of security, compliant with ESIGN and eIDAS e-signature laws.</dd>
      </div>

      <div>
        <dt class="font-semibold text-gray-900">Schedule invoices</dt>
        <dd class="mt-1 text-gray-600">Need to send out an invoice on a future date? LekkerInvoice lets you schedule your invoices to be automatically sent to your customers on the date you choose. </dd>
      </div>

      <div>
        <dt class="font-semibold text-gray-900">Invoice in multiple currencies</dt>
        <dd class="mt-1 text-gray-600">With multi-currency invoicing support from LekkerInvoice, you can bill your customers in the right currency for their location.</dd>
      </div>

      <div>
        <dt class="font-semibold text-gray-900">Customize your invoice templates</dt>
        <dd class="mt-1 text-gray-600">With customizable templates from LekkerInvoice, you can extend your brand from your website to your invoices for a consistent, professional image.</dd>
      </div>

      <div>
        <dt class="font-semibold text-gray-900">Set expiration dates for estimates</dt>
        <dd class="mt-1 text-gray-600">Add expiration dates to your estimates to encourage customers to accept them promptly and keep the sale process moving.</dd>
      </div>
    </dl>
  </div>
</div>


      <div class="overflow-hidden bg-white  sm:py-5">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
      <div class="lg:pr-4 lg:pt-4">
        <div class="lg:max-w-lg">
          <h2 class="text-base font-semibold leading-7 text-blue-500">Invoice faster</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A reliable invoicing method</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Send your invoices using LekkerInvoice today, and never miss a payment</p>
          <div class="py-4">
        <dt class="font-semibold text-gray-900">Set up payment reminders</dt>
        <dd class="mt-1 text-gray-600">Easily chase payments as they come due with automated payment reminders.</dd>
      </div>
          <div class="mt-8">
            <a href="https://beta.lekkerinvoice.co.za/register" class="inline-flex rounded-md text-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white bg-blue-400 hover:bg-green-600 shadow-sm hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
          </div>
        

          <figure class="mt-16 border-l border-gray-200 pl-8 text-gray-600">
            <blockquote class="text-base leading-7">
              <p>“I love the way your invoices work...I am having a extraordinary experience because it is so easy and user friendly.”</p>
            </blockquote>
            <figcaption class="mt-6 flex gap-x-4 text-sm leading-6">
              <img src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" class="h-6 w-6 flex-none rounded-full"/>
              <div><span class="font-semibold text-gray-900">Maria Hill</span> – CTO</div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="py-5">
      <img class=" bg-white object-cover  rounded-md border border-2 " src={Connect}/> 
      </div>
        </div>
  </div>
</div>

<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base font-semibold leading-7 text-indigo-600">Invoice faster</h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to know about LekkerInvoice</p>
      <p class="mt-6 text-lg leading-8 text-gray-600">Staying on top of your expenses is crucial to running a strong business. With LekkerInvoice, it's simpler than ever to track your reimbursable expenses and bill your clients right away.</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400">
              
            </div>
            Convert billable expenses to invoices
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Convert billable expenses to invoices
Associate billable expenses with customers and then convert them into invoices with the click of a button.</dd>
</div>
        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400">
          
            </div>
          

            Upload expense receipts
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Snap a picture of an expense receipt and easily upload it to LekkerInvoice for reference.</dd></div>

        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400">
          
            </div>
            Track your mileage

          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Record your vehicle expenses and convert billable miles to money with the mileage tracking feature from LekkerInvoice.
</dd>
</div>


        <div class="relative pl-16">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400">
             
            </div>
            Categorize expenses
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">Classify your expenses under different categories to make expense tracking and reporting easier.

</dd>
        </div>
      </dl>
    </div>
  </div>
</div>



  </div>
  
  
      
    );
  };