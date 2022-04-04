import Link from "next/link";
import React from "react";
import envVar from "../lib/envVar";

const AppLayout = ({ children }) => {
  return (
    <div className="Xdebug container max-w-xl mx-auto px-4  min-h-screen flex flex-col justify-between">
      <header className="py-6 ">
        <nav className="flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <a>
                <h1 className="text-3xl font-bold italic capitalize">
                  {envVar.appName ?? "Pay-Off-CC"}
                </h1>
              </a>
            </Link>
          </div>
          <div>
            <ul className="flex gap-6 items-center">
              <li>
                <Link href={"/cards/add"}>
                  <a className="flex items-center text-primary-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href={"/"}>
                  <a className="text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </a>
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
      {/* page-content */}
      {children}
      {/* /page-content */}
      <footer className="mt-auto py-6 ">
        <div className="flex flex-col justify-center gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          Powered by devsolo.in
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
