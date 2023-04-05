import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Lite',
    id: 'tier-lite',
    href: '#',
    price: { monthly: 'R199' },
    description: 'Great if you do all your invoicing yourself.',
    features: [
        'Create up to 100 invoices per month.',
        'Add unlimited clients.',
        'Connect your PayFast or Yoco account.',
        'No collaborators.'
    ],
  },
]
  const items =[
  {
    name: 'Small Business',
    id: 'item-small business',
    href: '#',
    price: { monthly: 'R499'},
    description: 'Perfect if you invoice together as a team.',
    features: [
      'Create up to 300 invoices per month.',
      'Invite unlimited team members.',
      'Add unlimited clients.',
      'Connect your PayFast or Yoco account.',
    ],
  },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Pricing() {
  
  return (
    <div className=" bg-white py-20 sm:py-30">
      <div className=" max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center ">
          <h2 className="text-lg font-semibold leading-7 text-slate-600">PRICING</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            No transaction fees. Payments are direct to you.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg  text-gray-600">
          Get 2-months free with annual billing.
        </p>
        </div>
        
        <div className="isolate flex space-between mx-auto mt-10 grid max-w-md grid-cols-2  md:max-w-2xl md:grid-cols-2  xl:grid-cols-2 ">
        {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                'ring-1 ring-cyan-200 rounded-3xl p-8',
                )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  'text-3xl text-orange-300 font-extrabold leading-8'
                )}
              >
                {tier.name}
              </h3>
              <img src="https://www.getaplano.com/static/c69688c2fcc79d1e78287ea5a9c65fd3/aef42/core-option-img.png" alt=""/>
              <p className="mt-4 text-lg leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-blue-500">R199</span>
                <span className="text-3xl font-semibold leading-6 text-blue-500">/mo</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  'text-blue-600 ring-1 ring-inset ring-indigo-200 hover:bg-green-400 mt-6 block rounded-md py-2 px-3 text-center text-lg font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                )}
              >
                Start Free
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600 fill-green-500" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        {items.map((item) => (
            <div
              key={item.id}
              className={classNames(
                'ring-1 ring-cyan-200 rounded-3xl p-8'
              )}>
              <h3
                id={item.id}
                className={classNames(
                  'text-3xl text-yellow-500 font-extrabold leading-8'
                )}
              >
                {item.name}
              </h3>
              <img src="https://www.getaplano.com/static/a7bb67cfa92ea8d1c8929b08cb053a91/aef42/light-option-img.png" alt=""/>
              <p className="mt-4 text-lg leading-6 text-gray-600">{item.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-blue-500">R499</span>
                <span className="text-3xl font-semibold leading-6 text-blue-500">/mo</span>
              </p>
              <a
                href={item.href}
                aria-describedby={item.id}
                className={classNames(
                 'text-blue-600 ring-1 ring-inset ring-indigo-200 hover:bg-green-400 mt-6 block rounded-md py-2 px-3 text-center text-lg font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                )}
              >
                Start Free
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600 fill-green-500" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}