import React, { useCallback, useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from './header';
import Sidebar from './sidebar';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSideBar = useCallback(() => setIsSidebarOpen((isOpen) => !isOpen), [isSidebarOpen])

  return (
    <div className="min-h-screen">
      <Header
        isSidebarOpen={isSidebarOpen}
        toggleSideBar={toggleSideBar}
      />
      <div className="flex pt-16 lg:pt-0 overflow-hidden bg-white">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSideBar={toggleSideBar}
        />
        <div
          id="main-content"
          className="relative w-full min-h-[calc(100vh-4rem)] overflow-y-auto  lg:ml-64"
        >
          <main className="items-center p-3 mx-auto max-w-[1440px] lg:p-9 md:p-6 h-[calc(100vh-4rem)] md:h-full">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout
