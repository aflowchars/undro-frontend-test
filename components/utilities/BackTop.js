import { useEffect, useState } from "react"

export default function BackTop() {
  const [showBtnTop, setShowBtnTop] = useState(false);
  
  const makeBtnTopShowed = () => {
    if (window.scrollY >= 1100) {
      setShowBtnTop(true)
    } else {
      setShowBtnTop(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }; 

  useEffect(() => {
    window.addEventListener('scroll', makeBtnTopShowed);
  })

  return (
    <button onClick={scrollToTop} className={showBtnTop ? `back-top fixed block bottom-10 right-10 transform ease-in duration-1000 animate-bounce` : `back-top transform ease-out duration-1000 fixed hidden bottom-10 right-10`}>
      <svg className="w-14 h-14 stroke-white -rotate-90 bg-primary-two rounded-full border-2 border-white" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="28" className="fill-inherit"/>
        <path d="M30.43 34.07L36.5 28L30.43 21.93" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.5 28L36.33 28" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  )
}