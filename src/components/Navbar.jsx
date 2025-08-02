
import logo from '../assets/images/logo.png';
import { useState } from 'react';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('home');

  const menuItems = [
    { label: 'Home', href: '#', key: 'home' },
    { label: 'Jobs', href: '#', key: 'jobs' },
    { label: 'Add Job', href: '#', key: 'add-job' },
  ];
  return (
    <>
        <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div
              className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
            >
              {/* <!-- Logo --> */}
              <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                <img
                  className="h-10 w-auto"
                  src="{ logo }"
                  alt="React Jobs"
                />
                <span className="hidden md:block text-white text-2xl font-bold ml-2"
                  >React Jobs</span
                >
              </a>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  {menuItems.map((item) => (
                    <a
                        key={item.key}
                        href={item.href}
                        onClick={() => setActiveMenu(item.key)}
                        className={`text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 ${
                        activeMenu === item.key ? 'bg-black' : ''
                        }`}
                    >
                        {item.label}
                    </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar