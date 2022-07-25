export default function Footer() {
  return (
    <footer className="footer bg-primary-two text-white">
      <div className="wrapper grid grid-cols-12 relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-0.5 before:h-full before:bg-white">
        <div className="col-span-6 p-20 space-y-40">
          <div className="info">
            <h5 className="pb-4 font-bold w-11/12 text-[4rem]">Don't miss out Our new product</h5>
            <p className="text-xl">Your body hears everything that your mind says.</p>
          </div>

          <form className="email flex flex-col items-start">
            <input type="text" placeholder="Email" className="mb-8 text-xl outline-none py-6 border-b-2 w-8/12 border-white bg-primary-two placeholder:text-white placeholder:text-opacity-60" />
            <button className="bg-white text-gray-dark py-[14px] px-10 rounded-full text-2xl font-semibold">Subscribe</button>
          </form>
        </div>

        <div className="col-span-6 p-20 flex flex-col items-center h-full">
          <div className="heading mb-24 flex items-center">
              <div className="icon">
                <svg width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M107.803 37.1975C114.759 44.1531 119.496 53.015 121.415 62.6627C123.334 72.3103 122.349 82.3104 118.585 91.3982C114.82 100.486 108.446 108.254 100.267 113.719C92.0879 119.184 82.4721 122.1 72.6355 122.1C62.7988 122.1 53.1831 119.184 45.0042 113.719C36.8253 108.254 30.4507 100.486 26.6863 91.3982C22.922 82.3104 21.9371 72.3103 23.8561 62.6627C25.7752 53.015 30.512 44.1531 37.4675 37.1975L47.5541 47.2841C42.5935 52.2447 39.2153 58.565 37.8466 65.4456C36.478 72.3261 37.1804 79.458 39.8651 85.9394C42.5498 92.4208 47.0961 97.9605 52.9292 101.858C58.7622 105.756 65.6201 107.836 72.6355 107.836C79.6508 107.836 86.5087 105.756 92.3418 101.858C98.1748 97.9605 102.721 92.4208 105.406 85.9394C108.091 79.4581 108.793 72.3261 107.424 65.4456C106.056 58.565 102.677 52.2448 97.7168 47.2841L107.803 37.1975Z" fill="white"/>
                  <path d="M55.0826 72.5121C55.0826 62.7421 63.0027 54.8221 72.7726 54.8221C82.5425 54.8221 90.4626 62.7421 90.4626 72.5121C90.4626 82.282 82.5425 90.202 72.7726 90.202C63.0027 90.202 55.0826 82.282 55.0826 72.5121Z" fill="white"/>
                  <path d="M81.2066 26.9666C81.2066 31.7715 77.3115 35.6666 72.5066 35.6666C67.7017 35.6666 63.8066 31.7715 63.8066 26.9666C63.8066 22.1617 67.7017 18.2666 72.5066 18.2666C77.3115 18.2666 81.2066 22.1617 81.2066 26.9666Z" fill="white"/>
                </svg>
              </div>
              <h3 className="brand-name font-bold text-7xl">
                Undro
              </h3>
          </div>
          <ul className="menu grid grid-cols-2 gap-x-4 gap-y-10 mb-14">
            <a className="bg-white text-primary-two text-xl font-bold uppercase w-60 h-min text-center rounded-full px-12 py-6 " href="#">About Us</a>
            <a className="bg-white text-primary-two text-xl font-bold uppercase w-60 h-min text-center rounded-full px-12 py-6 " href="#">Teams</a>
            <a className="bg-white text-primary-two text-xl font-bold uppercase w-60 h-min text-center rounded-full px-12 py-6 " href="#">Social</a>
            <a className="bg-white text-primary-two text-xl font-bold uppercase w-60 h-min text-center rounded-full px-12 py-6 " href="#">Legal</a>
            <a className="bg-white text-primary-two text-xl font-bold uppercase w-60 h-min text-center rounded-full px-12 py-6 " href="#">Product</a>
            <a className="bg-white text-primary-two text-xl font-bold uppercase w-60 h-min text-center rounded-full px-12 py-6 " href="#">Resources</a>
          </ul>
          <div className="copyright font-medium">
          © 2077 UNDRO. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}