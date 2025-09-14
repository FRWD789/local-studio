import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (

    <div className="flex flex-col h-screen text-white">
      <header className="h-[10%] bg-amber-200">

      </header>
      <main className="flex-1 overflow-hidden " >
        {children}
      </main>
    </div>
  
   
  );
}
