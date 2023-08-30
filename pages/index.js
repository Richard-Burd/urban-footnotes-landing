import Image from 'next/image'
import Link from 'next/link'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
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
            <h1 className='roboto-font text-7xl text-stone-300 pl-10 opacity-60'>Urban Footnotes</h1>
            <div className='roboto-font text-2xl text-stone-300 pl-20 tracking-wide'>Comming Soon!</div>
          </div>
        </div>
      </div>

      <div className='m-20'>
        <center>
          <div className='roboto-font text-4xl text-stone-300 opacity-60 tracking-wide pb-4'>Mission Statement</div>
        </center>
        <div className='roboto-font italic text-1xl text-stone-300 pl-10'>
          <p>
            In service of residents who want to use personal mechanized transportation as little as possible, we strive to provide the most helpful assessment of how well all desired services are provided within easy walking distance of any given address.
          </p>
          <br />
          <p>

          </p>
          <br />
          <p>

          </p>
        </div>
      </div>

      <Link href="https://urbancruiseship.org/">
        <div className="flex justify-center items-center m-20">
          <div className="flex">
            <p className='ucs-font tracking-wider text-2xl text-right text-stone-300 pl-10 opacity-75'>
              A project of Urban Cruise Ship
            </p>
          </div>
          <div className="flex pl-8">
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
