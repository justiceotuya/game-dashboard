import React, { Fragment, ReactNode, useEffect, useState, useLayoutEffect } from 'react'
import { Link, NavLink, Outlet } from "react-router-dom";
import { ReactComponent as LogoIcon } from '../../assets/logo.svg'

type Props = {
    isSidebarOpen: boolean
    toggleSideBar: () => void

}

const Header = (props: Props) => {
    const { isSidebarOpen, toggleSideBar } = props
    return (
        <nav className="lg:hidden fixed z-30 w-full h-16 border-b leading-tight border-color-secondary-4">
            <div className="h-full px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between h-full">
                    <Link to="/">
                        <LogoIcon width={32} />
                    </Link>

                    <button
                        id="toggleSidebarMobile"
                        onClick={toggleSideBar}
                        aria-expanded="true"
                        className={`w-8  text-color-secondary-1 rounded cursor-pointer flex justify-center  lg:hidden`}
                        title='toggle sidebar'
                        type="button"
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
                </div>
            </div>
        </nav>
    )
}

export default Header
