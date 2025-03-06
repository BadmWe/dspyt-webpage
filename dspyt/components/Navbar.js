import {
  DisclosureButton,
  DisclosurePanel,
  Disclosure,
} from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/DSPYT.svg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Profiles", href: "/profiles" },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <div>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 md:h-20">
              <div className="inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              <div className="flex-1 flex items-center sm:items-stretch sm:justify-start ml-5 md:ml-10">
                <Link href={"/"}>
                  <Image
                    lazy="true"
                    height={32}
                    width={120}
                    src={Logo}
                    alt="Dspyt: Data Science with Python"
                  />
                </Link>

                <div className="hidden space-x-4 sm:block sm:ml-8">
                  {navigation.map((item) => (
                    <Link
                      key={`${item.name}Link`}
                      href={item.href}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium text-base md:text-lg md:ml-5"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                type="button"
                className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                href="/faq"
              >
                Add your Post
                <CheckCircleIcon
                  className="-mr-0.5 h-5 w-5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={`${item.name}hiddenLink`}
                  href={item.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
}
