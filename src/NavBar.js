import React, { useState } from "react"
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon, BeakerIcon } from '@heroicons/react/outline'

import { NavLink } from "react-router-dom";

export const NavBar = () => {
    const [navigation, setNavigation] = useState([
        { name: 'Accueil', href: '/', current: true },
        { name: 'Users', href: '/users', current: false },
        { name: 'Tasks', href: '/tasks', current: false },
        { name: 'Comments', href: '/comments', current: false },
        { name: 'Contact', href: '/contact', current: false },
      ]) 
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
      const setCurrentItem = (item) => {
        const copy = [...navigation];
        const indexNew = copy.findIndex(nav => nav.name === item.name)
        const indexOld = copy.findIndex(nav => nav.current === true)
        copy[indexNew].current = true
        copy[indexOld].current = false
        setNavigation(copy)
      }
      return (
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center text-gray-300">
                        <BeakerIcon className="block h-6 w-6 " aria-hidden="true" />
                        <h2 className="text-lg font-bold leading-7 sm:text-xl sm:truncate ml-1">
                            UserLab
                        </h2>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                            <NavLink 
                                to={item.href} 
                                key={item.name}
                                onClick={() => setCurrentItem(item)}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'px-3 py-2 rounded-md text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                                >
                                  {item.name}
                            </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      );
}
