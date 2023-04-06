import React from "react";


const RefundPolicy = () => {
return (
	<div className="border border-2 border-gray-300">
<div className="px-10">
		<div className="py-5">	<div className="lg:text-center    h-30 ">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase underline text-blue-800">LekkerInvoice</h2>
          <p className="mt-2 text-3xl  underline leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Refund Policy </p>
</div>
</div>
	
<div className="py-5" >
	<p >
LekkerInvoice, does not offer refunds, but if you have a paid subscription and wish to go to a free subscription instead, you can have your remaining account balance prorated and used as credits for future LekkerInvoice services, or you can choose to be downgraded at the end of that current billing cycle and keep the rest of the cycle as is.
One can change the subscription level and there are two options when downgrading from a paid account to a free plan.
</p> 
</div>
<div>
	<div className="py-5">
<p>1. You 
can downgrade to a Free Plan immediately. If there is more than one day until your renewal date, we will pro-rate the remaining balance on your account and hold it for you as a credit. You can use that credit towards a reactivation of your paid subscription in the future.
</p>
</div>


<div className="py-5">
<p>
2. We can automatically downgrade you to the Free Plan at your next renewal date. Your subscription will remain active at its current level through the end of the billing period that you’ve already paid for.
</p>
</div>
</div>
		
	</div>

	
	</div>
);
};

export default RefundPolicy;