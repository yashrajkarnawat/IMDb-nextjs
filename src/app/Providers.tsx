"use client";

import React from 'react'
import { ThemeProvider } from 'next-themes'

export default function Providers({children}:any) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
     <div className='text-black dark:text-white dark:bg-gray-900 min-h-screen select-none transition-colors duration-300'>
        {children}
     </div>
    </ThemeProvider>
  )
}
