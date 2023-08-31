import Image from 'next/image'
import Link from 'next/link'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-8 ${inter.className}`}
    >
      <div className="flex justify-center">
        <div className="flex">
          <Image 
            src="/ufn-logo-light.svg"
            alt="Urban Footnotes Logo"
            width={60} 
            height={60}
            style={{ minWidth: '60px', opacity: 0.5 }}
          />
        </div>
        <div className="flex">
          <div>
            <h1 className='roboto-font text-4xl lg:text-7xl text-stone-300 lg:pl-10 opacity-60'>Urban Footnotes</h1>
          </div>
        </div>
      </div>

      <div className='lg:m-20'>
        <center>
          <div className='roboto-font text-2xl pt-12 lg:pt-2 lg:text-4xl text-stone-300 opacity-60 tracking-wide pb-4'>Mission Statement</div>
        </center>
        <div className='roboto-font italic text-1xl text-stone-300 text-justify lg:text-left lg:mx-32'>
          <p>
            We want to create the best walkability assessment for a given property or location.  Our primary customers are people looking for a place to live who also want to reduce their use of, and dependence on, cars and other transportation means.  Our secondary customers are realtors, real estate developers and others involved in deciding where people live, work, shop, and play.
          </p>
          <br />
          <p>
            Our objective is to slow the rate of urban sprawl through highlighting the benefits of living in more concentrated locations.  We seek to encourage the better use of those locations through encouraging development of mixed use properties which would reduce the need for personal car ownership.
          </p>
          <br />
          <p>
            Urban Footnotes was created by researchers at Urban Cruise Ship in response to their research on 
            <a
              href="https://www.urbancruiseship.org/cities"
              className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-400 transition"
              target="_blank"
              rel="noreferrer"
            >
            &nbsp;
            <b>
              cities
            </b>
            &nbsp;
          </a>.   We are currently working with early adapters in the real estate industry and plan to develop an online application for general use in the future.
          </p>
        </div>
      </div>

      
      <Link href="https://urbancruiseship.org/">
        <div className="lg:flex justify-center lg:m-20 mt-24">
          <div className="lg:flex">
            <p className='ucs-font tracking-wider text-2xl lg:text-right text-stone-300 lg:pl-10 opacity-75 my-6'>
              A project of Urban Cruise Ship
            </p>
          </div>
          <div className="lg:flex lg:pl-8 justify-center">
            <Image 
              src="/ucs-logo-light.svg"
              alt="Urban Cruise Ship Logo"
              width={200} 
              height={100}
              unoptimized={true}
              style={{ minWidth: '200px', opacity: 0.8 }}
            />
          </div>
        </div>
      </Link>
      <footer>
        <Link href="mailto:richard@urbancruiseship.org">
          <div className='racking-wider text-1xl text-right text-stone-300'>contact: richard@urbancruiseship.org</div>
        </Link>
      </footer>
    </main>
  )
}
