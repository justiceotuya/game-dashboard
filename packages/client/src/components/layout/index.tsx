import React, { Fragment, ReactNode, useEffect, useState, useLayoutEffect } from 'react'
import { Link, NavLink,Outlet } from "react-router-dom";
import {ReactComponent as LogoIcon} from '../../assets/logo.svg'

const data = [
  { name: 'Dashboard', url: '/dashboard' },
  { name: 'Users', url: '/users' },
  { name: 'Games', url: '/games' },
  { name: 'Game play', url: '/game-play' },
]

const navClass = 'text-color-secondary-1 flex items-center p-2 text-base no-underline transition-colors duration-300 transform rounded-md '

const Layout = (children:any) => {

  const isPageActive = (url: string) => {
    return window.location.pathname.includes(url)
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSideBar = () => setIsSidebarOpen((isOpen) => !isOpen)

  return (
    <div className="min-h-screen">
      <nav className="lg:hidden fixed z-30 w-full h-16 border leading-tight">
        <div className="h-full px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center justify-start">
              <button
                id="toggleSidebarMobile"
                onClick={toggleSideBar}
                aria-expanded="true"
                aria-controls="sidebar"
                className={`p-2 mr-2 text-color-secondary-1 rounded cursor-pointer   lg:hidden`}
                title='toggle sidebar'
              >
                <svg
                  id="toggleSidebarMobileHamburger"
                  className={`w-6 h-6 ${isSidebarOpen ? 'hidden' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  id="toggleSidebarMobileClose"
                  className={` w-6 h-6 ${isSidebarOpen ? '' : 'hidden'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <Link
                className="text-xl font-bold flex items-center lg:ml-2.5 no-underline "
                to={'/dashboard'}
              >
                <span className="self-center text-white whitespace-nowrap">The Game</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex pt-16 lg:pt-0 overflow-hidden bg-white">
        <aside
          id="sidebar"
          className={`fixed top-0 left-0 z-20 border border-color-secondary-4 bg-color-white flex-col flex-shrink-0 w-64 h-full duration-75 lg:flex transition-width ${isSidebarOpen ? 'flex' : 'hidden'
            }`}
          aria-label="Sidebar"
        >

          <Link to="/" className='p-6'>
            <LogoIcon/>
          </Link>
          <div className="relative flex flex-col flex-1 min-h-0 pt-0">
            <div className="flex flex-col flex-1 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 space-y-1  divide-y">
                {data?.length ? (
                  <ul className="pb-2 pl-0 space-y-2">
                    {data.map((item, index) => {
                      return (
                        <li
                          key={index}
                        >
                          <NavLink
                            className={({ isActive }: { isActive: boolean }) => navClass +  (isActive && isPageActive(item.url) ? 'bg-color-primary-1/10 text-color-primary-1' : 'hover:bg-color-primary-1/10 hover:text-color-primary-1')}
                            to={item.url}
                            onClick={toggleSideBar}
                          >
                            <span className="flex-1 ml-3 whitespace-nowrap">
                              {item.name}
                            </span>
                          </NavLink>
                        </li>
                      )
                    })}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </aside>
        <div
          className={`fixed inset-0 z-10 lg:hidden bg-gray-900 opacity-50 ${isSidebarOpen ? '' : 'hidden'}`}
          id="sidebarBackdrop"
          onClick={toggleSideBar}
        ></div>
        <div
          id="main-content"
          className="relative w-full min-h-[calc(100vh-4rem)] overflow-y-auto  lg:ml-64"
        >
          <main className="items-center p-3 mx-auto max-w-[1440px] lg:p-9 md:p-6 h-full">
           <Outlet/>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout
