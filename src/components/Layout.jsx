import { useState } from "react";
import { Link, NavLink } from 'react-router-dom'

export default function DashBoard(componentsProps) {
  const [expanded, setExpanded] = useState(true);
  return (
    <>
     
        <section
          className={`h-full relative bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden top-0 bottom-0 left-0 ${
            expanded ? "w-48" : "w-10"
          } h-screen`}
        >
          <div className="flex p-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-layout-dashboard mr-2 text-white"
              >
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
              </svg>
            </span>
            <h1
              className={`font-bold text-base tracking-widest overflow-hidden text-white`}
            >
              <NavLink to='/'>DashBoard</NavLink>
            </h1>
          </div>
          <div className="py-3">
            <ul className="">
              <li className="text-white  hover:cursor-pointer overflow-hidden py-2 px-2 flex hover:underline">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={`lucide lucide-user-round mr-3 ${
                      expanded ? "" : ""
                    }`}
                  >
                    <circle cx="12" cy="8" r="5" />
                    <path d="M20 21a8 8 0 0 0-16 0" />
                  </svg>
                </span>
                <a href=''>Profile</a>
              </li>
              <li className="text-white  hover:cursor-pointer py-2 px-2 flex hover:underline">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={`lucide lucide-file-plus mr-3`}
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M9 15h6" />
                    <path d="M12 18v-6" />
                  </svg>
                </span>
                <Link to='/features'>Records</Link>
              </li>
              <li className="text-white  hover:cursor-pointer py-2 px-2 flex hover:underline">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={`lucide lucide-file-bar-chart-2 mr-3`}
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M8 18v-1" />
                    <path d="M12 18v-6" />
                    <path d="M16 18v-3" />
                  </svg>
                </span>
                <Link to='details'>Reports</Link>
              </li>
            </ul>
          </div>
          <div>
            <button
              className={`absolute bottom-3 right-2 text-white`}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={`lucide lucide-panel-left-close`}
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 3v18" />
                  <path d="m16 15-3-3 3-3" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-panel-right-close"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M15 3v18" />
                  <path d="m8 9 3 3-3 3" />
                </svg>
              )}
            </button>
          </div>
        </section>
      </>
  );
}
