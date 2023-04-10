import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { formatWithOptions } from 'util'
import Link from 'next/link'

const font = Poppins({ weight: '300', subsets: ['latin'] })

export default function HomePage() {
  return (
    <main className={ 'm-3 md:mx-32 w-screen' + font.className}>
      <h1 className=''>travercy media</h1>
    </main>
  )
}
