import { Link, NavLink } from "react-router-dom";
import { ReactComponent as LogoIcon } from '../../assets/logo.svg'

type Props = {
    isSidebarOpen: boolean
    toggleSideBar: () => void
}
const dashboardLinks = [
    // { name: 'Dashboard', url: '/dashboard' },
    { name: 'Users', url: '/users' },
    { name: 'Games', url: '/games' },
]


const navClass = 'text-color-secondary-1 flex items-center p-2 text-base no-underline transition-colors duration-300 transform rounded-md '

const isPageActive = (url: string) => {
    return window.location.pathname.includes(url)
}

const Sidebar = (props: Props) => {
    const { isSidebarOpen, toggleSideBar } = props

    return (
        <>
            <aside
                id="sidebar"
                className={`fixed top-16 lg:top-0 left-0 z-20 border border-color-secondary-4 bg-color-white flex-col flex-shrink-0 w-64 h-full duration-75 lg:flex transition-width ${isSidebarOpen ? 'flex' : 'hidden'
                    }`}
                aria-label="Sidebar"
            >

                <Link to="/" className='p-6 hidden lg:block'>
                    <LogoIcon />
                </Link>
                <div className="relative flex flex-col flex-1 min-h-0  pt-3 lg:pt-0">
                    <div className="flex flex-col flex-1 pb-4 overflow-y-auto">
                        <div className="flex-1 px-3 space-y-1  divide-y">
                            {dashboardLinks?.length ? (
                                <ul className="pb-2 pl-0 space-y-2">
                                    {dashboardLinks.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                            >
                                                <NavLink
                                                    className={({ isActive }: { isActive: boolean }) => navClass + (isActive && isPageActive(item.url) ? 'bg-color-primary-1/10 text-color-primary-1' : 'hover:bg-color-primary-1/10 hover:text-color-primary-1')}
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
                className={`fixed inset-0 z-10 lg:hidden bg-color-accent-2 top-16 ${isSidebarOpen ? '' : 'hidden'}`}
                id="sidebarBackdrop"
                onClick={toggleSideBar}
            ></div>
        </>
    )
}

export default Sidebar
