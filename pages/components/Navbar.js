import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigations = [
  { name: "Menu", href: "/" },
  { name: "About", href: "/about" },
];
const Navbar = () => {
  return (
    // navbar
    <nav>
      <Disclosure as="nav" className="bg-sky-900 fixed top-0 w-full z-10">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 shadow-md">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 transition rounded-md text-gray-300 hover:text-white hover:bg-sky-700 outline outline-2 ml-1 mr-1">
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div>
                  <p className="hidden sm:block h-8 w-auto text-white text-xl font-medium tracking-widest">
                    NASGOR BASI
                  </p>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
                  <div className="flex-shrink-0 flex items-center">
                    <p className="block sm:hidden h-8 w-auto text-white text-xl font-medium tracking-widest">
                      NASGOR BASI
                    </p>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigations.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-gray-300 transition hover:bg-sky-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Transition
              enter="transition duration-300 ease-out"
              enterFrom="transform scale-75 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="sm:hidden">
                <div className=" px-2 pt-2 pb-3 space-y-1">
                  {navigations.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="text-gray-300 transition hover:bg-sky-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </nav>
    // navbar end
  );
};

export default Navbar;
