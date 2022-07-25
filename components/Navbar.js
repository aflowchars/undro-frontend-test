import { useEffect, useState } from "react"

export default function Navbar() {
  // const [navbar, setNavbar] = useState(false)
  const [hideNavbar, setHideNavbar] = useState(false)

  // const changeNavbarBg = () => {
  //   window.scrollY >= 1081 ? setNavbar(false) : setNavbar(true)

  // }
  const hideNavbarAll = () => {
    window.scrollY >= 160 ? setHideNavbar(true) : setHideNavbar(false);
  }

  
  useEffect(() => {
    window.addEventListener('scroll', hideNavbarAll);
  })

  return (
    <nav className={hideNavbar ? 'nav fixed -top-80 left-0 z-50 flex items-center justify-between text-white px-20 py-8 w-full bg-transparent transform ease-out duration-1000' : 'nav fixed top-0 left-0 z-50 flex items-center justify-between text-white px-20 py-8 w-full bg-transparent  transform ease-out duration-1000'}>
      <div className="logo flex items-center space-x-1">
        <svg className="icon w-12 h-12" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.1736 12.827C39.5721 15.2254 41.2055 18.2813 41.8672 21.6081C42.5289 24.9348 42.1893 28.3831 40.8913 31.5169C39.5932 34.6506 37.3951 37.3291 34.5748 39.2136C31.7545 41.098 28.4387 42.1039 25.0467 42.1039C21.6548 42.1039 18.339 41.098 15.5187 39.2136C12.6984 37.3291 10.5002 34.6506 9.2022 31.5169C7.90415 28.3831 7.56453 24.9348 8.22626 21.6081C8.888 18.2813 10.5214 15.2254 12.9199 12.827L16.398 16.3051C14.6874 18.0157 13.5225 20.1951 13.0506 22.5677C12.5786 24.9403 12.8209 27.3996 13.7466 29.6345C14.6723 31.8695 16.24 33.7797 18.2515 35.1237C20.2629 36.4677 22.6276 37.185 25.0467 37.185C27.4658 37.185 29.8306 36.4677 31.842 35.1237C33.8534 33.7797 35.4211 31.8695 36.3469 29.6345C37.2726 27.3996 37.5148 24.9403 37.0429 22.5677C36.5709 20.1951 35.406 18.0157 33.6955 16.3051L37.1736 12.827Z" fill="white"/>
          <path d="M18.9951 25.0038C18.9951 21.6349 21.7262 18.9038 25.0951 18.9038C28.4641 18.9038 31.1951 21.6349 31.1951 25.0038C31.1951 28.3727 28.4641 31.1038 25.0951 31.1038C21.7262 31.1038 18.9951 28.3727 18.9951 25.0038Z" fill="white"/>
          <path d="M28.0012 9.29883C28.0012 10.9557 26.658 12.2988 25.0012 12.2988C23.3443 12.2988 22.0012 10.9557 22.0012 9.29883C22.0012 7.64197 23.3443 6.29883 25.0012 6.29883C26.658 6.29883 28.0012 7.64197 28.0012 9.29883Z" fill="white"/>
        </svg>

        <span className="brand font-bold text-2xl">Undro</span>
      </div>

      <ul className="menu font-semibold flex items-center space-x-6">
        <div className="left space-x-10 flex items-center">
          <li className="item">
            <a className="link" href="#">Product</a></li>
          <li className="item">
            <a className="link" href="#">Workout</a>
          </li>
          <li className="item">
            <a className="link" href="#">Store</a>
          </li>
          <li className="item">
            <a className="link" href="#">About Us</a>
          </li>
        </div>

        <div className="right flex items-center space-x-6">
            <a className="link flex items-center space-x-2 p-4 border border-white rounded-full" href="#">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12.5C12.7614 12.5 15 10.2614 15 7.5C15 4.73858 12.7614 2.5 10 2.5C7.23858 2.5 5 4.73858 5 7.5C5 10.2614 7.23858 12.5 10 12.5Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M2.42188 16.875C3.18979 15.5446 4.2944 14.4398 5.62465 13.6717C6.9549 12.9036 8.46392 12.4993 10 12.4993C11.5361 12.4993 13.0451 12.9036 14.3753 13.6717C15.7056 14.4398 16.8102 15.5446 17.5781 16.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Login</span>
            </a>
          
          <a href="#" className="item">
            <svg className="w-14 h-14" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.75 28H36.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.75 22H36.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.75 34H36.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" stroke="white"/>
            </svg>
          </a>
        </div>
      </ul>
    </nav>
  )
}