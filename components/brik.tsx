import React from 'react';
import localFont from 'next/font/local'

import { cn } from '@/lib/utils';

const legoFont = localFont({ src: '../public/fonts/LEGO.ttf' })

const Brik: React.FC<React.ComponentProps<'div'>> = ({ className, children, ...props }) => {

    return (
        <div className={cn("flex stroke-black fill-white text-justify text-white", className, legoFont.className)} {...props}>
            <svg
                className='relative'
                xmlns="http://www.w3.org/2000/svg"
                viewBox='0 0 365 185'
                strokeWidth="5"
            >
                <rect width="365" height="165" x="0" y="23" rx="5" />
                <rect width="52" height="20" x="31.4" y="2.25" rx="2" />
                <rect width="52" height="20" x="114.8" y="2.25" rx="2" />
                <rect width="52" height="20" x="198.2" y="2.25" rx="2" />
                <rect width="52" height="20" x="281.6" y="2.25" rx="2" />

            </svg >
            {/* need to add shadow and everything to tailwind */}
            <span className='absolute inset-x-[5%] inset-y-[35%] lego-outline'> {children} </span>
        </div>
    )
}

export default Brik