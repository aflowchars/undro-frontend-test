export default function Services() {
  return (
    <section className="services px-20 pb-40">
      <ul className="heading mb-14 collapse text-gray-dark border-b border-gray-dark flex items-center justify-between text-[4rem] font-semibold">
        <li className="py-4 relative">
          <button className="text-primary-two">Program</button>
          <div className="active absolute h-1 w-full bg-primary -bottom-0.5 left-0"></div>
        </li>        
        <li className="relative w-4 h-4 bg-gray-dark rounded-full">&nbsp;</li>
        <li className="py-4 relative">
          <button>Shop</button>
        </li>        
        <li className="relative w-4 h-4 bg-gray-dark rounded-full">&nbsp;</li>

        <li className="py-4 relative"><button>Food</button></li>        
        <li className="relative w-4 h-4 bg-gray-dark rounded-full">&nbsp;</li>

        <li className="py-4 relative">
          <button className="relative flex items-center">
            <span>Fashion</span>
            <span className="-mt-8 text-2xl bg-primary-two bg-opacity-10 text-primary-two px-4 py-2 rounded-full">New</span>
          </button>
        </li>        
      </ul>

      <div className="content">
        <div className="grid grid-cols-12 gap-x-5">
          <div className="col-span-3 flex flex-col items-start justify-between">
            <div className="top">
              <div className="difficulty mb-14 flex items-center text-[2rem] font-bold space-x-4">
                <h5>Difficulty:</h5>
                <span>Easy</span>
              </div>

              <p className="text-gray-dark text-opacity-60 text-xl font-normal w-10/12">This workout program has easy and simple difficulties. working on this program only takes 30-40 minutes per week</p>
            </div>

            <div className="bottom flex self-stretch items-center space-x-3 pt-8 border-t-2 border-gray-light-two">
              <svg className="w-14 h-14" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="#F2F2F2"/>
                <path d="M25.57 21.93L19.5 28L25.57 34.07" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M36.5 28H19.67" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <svg className="w-14 h-14" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="#F2F2F2"/>
                <path d="M30.43 34.07L36.5 28L30.43 21.93" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.5 28L36.33 28" stroke="#1E1E1E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="col-span-3">
            <img className="pb-6 h-[27rem] w-full object-cover" src="./program-1.png" alt="program-img" />
            <h5 className="title mb-2 text-2xl font-semibold">Pelates</h5>
            <p className="minutes text-gray-dark text-opacity-60 font-medium text-base">
              <span>20-30</span>
              <span className="pl-2">Minutes</span>
            </p>
          </div>
          <div className="col-span-3">
            <img className="pb-6 h-[27rem] w-full object-cover" src="./program-2.png" alt="program-img" />
            <h5 className="title mb-2 text-2xl font-semibold">Yoga Yogi</h5>
            <p className="minutes text-gray-dark text-opacity-60 font-medium text-base">
              <span>20-30</span>
              <span className="pl-2">Minutes</span>
            </p>
          </div>
          <div className="col-span-3">
            <img className="pb-6 h-[27rem] w-full object-cover" src="./program-3.png" alt="program-img" />
            <h5 className="title mb-2 text-2xl font-semibold">Likap Lilin</h5>
            <p className="minutes text-gray-dark text-opacity-60 font-medium text-base">
              <span>20-30</span>
              <span className="pl-2">Minutes</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}