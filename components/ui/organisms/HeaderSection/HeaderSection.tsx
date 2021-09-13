import clsx from 'clsx';
import React from 'react';

const HeaderSection = () => (
  <nav className="bg-cs-black p-2 mt-0 fixed w-full z-10 top-0">
    <div className="container mx-auto flex flex-wrap items-center">
      <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
        <a className="text-white no-underline hover:text-white hover:no-underline" href="/">
          <span className="text-2xl pl-2">&#60;Cristian Sotomayor /&#62;</span>
        </a>
      </div>
      <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
        <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
          <li className="mr-3">
            <a
              className={clsx(
                'inline-block',
                'text-gray-600',
                'no-underline',
                'hover:text-gray-200',
                'hover:text-underline',
                'py-2',
                'px-4',
              )}
              href="/"
            >
              Home
            </a>
          </li>
          {/* <li className="mr-3">
            <a
              className={clsx(
                'inline-block',
                'text-gray-600',
                'no-underline',
                'hover:text-gray-200',
                'hover:text-underline',
                'py-2',
                'px-4',
              )}
              href="/"
            >
              link
            </a>
          </li>
          <li className="mr-3">
            <a
              className={clsx(
                'inline-block',
                'text-gray-600',
                'no-underline',
                'hover:text-gray-200',
                'hover:text-underline',
                'py-2',
                'px-4',
              )}
              href="/"
            >
              link
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
);

export default HeaderSection;
