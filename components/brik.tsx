import React from 'react';
import localFont from 'next/font/local'

import { cn } from '@/lib/utils';

const legoFont = localFont({ src: '../public/fonts/LEGO.ttf' })

const Brik: React.FC<React.ComponentProps<'div'>> = ({ className, children, ...props }) => {

    return (
        <div className={cn("@container flex stroke-black fill-white text-white text-center", className, legoFont.className)} {...props}>
            <svg
                className='relative'
                xmlns="http://www.w3.org/2000/svg"
                viewBox='0 0 370 180'
                strokeWidth="4"
            >
                <rect width="365" height="155" x="3" y="23" rx="5" />
                <rect width="52" height="20" x="34.4" y="2.25" rx="2" />
                <rect width="52" height="20" x="117.8" y="2.25" rx="2" />
                <rect width="52" height="20" x="201.2" y="2.25" rx="2" />
                <rect width="52" height="20" x="284.6" y="2.25" rx="2" />

            </svg >
            {/* need to add shadow and everything to tailwind */}
            <span className='absolute inset-x-[5%] inset-y-[37%] lego-outline @2xs:text-4xl'> {children} </span>
        </div>
    )
}

export default Brik