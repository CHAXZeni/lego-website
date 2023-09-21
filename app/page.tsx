'use client'
import Brik from '@/components/brik'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col  h-screen w-full justify-center items-center">
      < div
        className="flex flex-col relative justify-center items-center brick-container"
        style={{ '--width': '400px', '--size': 8 }}
      >
        <Brik
          className='brick z-[var(--order)] text-center text-3xl fill-blue-700'
          style={{
            '--order': '2', '--position': '0', '--height': '2'
          }}
        >
          CHRISTIAN ZENI
        </Brik>

        <Brik
          className='brick z-[var(--order)] text-center text-3xl fill-red-700'
          style={{ '--order': '1', '--position': '8', '--height': '1' }}
        >
          ZENI
        </Brik>

        <Brik
          className=' brick z-[var(--order)] fill-yellow-300 '
          style={{ '--order': '0', '--position': '4', '--height': '0' }}
        />
        <Brik
          className=' brick z-[var(--order)] fill-yellow-300 '
          style={{ '--order': '0', '--position': '10', '--height': '0' }}
        />
      </div >
    </div >
  )
}
