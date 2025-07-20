"use client";
import { useState } from "react";

import { NavigationItem } from "@/data/navbarItems";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
import Button from "./button";

interface NavbarProps {
  items: NavigationItem[];
}

const NavbarDesktop: React.FC<NavbarProps> = ({ items }) => {
  const buttonHref = "#";
  const buttonText = "Napište nám";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* ------ DESKTOP MENU */}
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">ANTIKOR</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              src="/img/logos/logo-long-mono-light.png"
              className="h-16 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-light bg-steel-700 hover:bg-steel-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
          >
            <span className="sr-only">Otevřít menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-light menu-link hover:text-steel-600 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button label={buttonText} href={buttonHref} />
        </div>
      </nav>

      {/* ------ MOBILE MENU */}

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-dark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-light/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ANTIKOR</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=steel&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-light"
            >
              <span className="sr-only">Zavřít menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {items.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-light"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 ">
                <Button label={buttonText} href={buttonHref} />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default NavbarDesktop;
