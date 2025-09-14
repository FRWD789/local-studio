import React from 'react'
type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({children}: LayoutProps) {
  return (
    <>
      <header className='h-[20vh]'>

      </header>
      <main className='bg-black h-[80vh] text-white overflow-hidden '>
          {children}
      </main>
    </>
  )
}
