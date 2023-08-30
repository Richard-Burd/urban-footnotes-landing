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
          <div className='roboto-font text-4xl text-stone-300 opacity-60 tracking-wide pb-4'>Thesis</div>
        </center>
        <div className='roboto-font italic text-1xl text-stone-300 pl-10'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
