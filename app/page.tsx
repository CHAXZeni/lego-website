'use client'
import Brik from '@/components/brik'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col  h-screen w-full justify-center items-center">
      < div
        className="flex flex-col relative justify-center items-center brick-container text-center"
        style={{ '--width': '1000px', '--size': '4' }}
      >
        <Brik
          className='brick z-[var(--height)]  fill-blue-700 text-4xl'
          style={{
            '--order': '3', '--position': '7', '--height': '3'
          }}
        >
          CHRISTIAN
          ZENI
        </Brik>

        <Brik
          className='brick z-[var(--height)]  fill-red-700'
          style={{ '--order': '2', '--position': '8', '--height': '2' }}
        >
          EXPERIENCE
        </Brik>

        <Brik
          className=' brick z-[var(--height)]  fill-yellow-300 '
          style={{ '--order': '1', '--position': '7', '--height': '1' }}
        >
          REFERENCES
        </Brik>
        <Brik
          className=' brick z-[var(--height)]  fill-green-700 '
          style={{ '--order': '0', '--position': '6', '--height': '0' }}
        >
          EXTRA
        </Brik>
      </div >
    </div >
  )
}
