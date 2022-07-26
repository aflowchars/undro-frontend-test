import { motion } from "framer-motion"
export default function() {
  return(
    <section className="hero min-h-screen bg-primary text-white">
      <div className="wrapper grid grid-cols-12 place-items-center">
        <div className="main-text col-span-5">
          <div className="text px-20 pb-16">
            <h1 className="pb-10 text-7xl font-semibold leading-snug">Be healthy easier and effortless</h1>
            <p className="text-xl font-semibold">Convenient, affordable. Make yourself<br></br> proud.Get on with Life. Don’t Panic, go<br></br> workout.</p>
          </div>

          <div className="cta pb-10">
            <button className="bg-white pl-20 pr-10 py-8 w-full flex items-center justify-between">
              <span className="text-primary text-4xl">Take a start</span>
              <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.148438" y="0.51709" width="55.833" height="55.833" rx="27.9165" fill="url(#paint0_linear_2_570)"/>
                <path d="M32.5519 26.1904L37.0385 30.677L32.5519 35.1636" stroke="white" stroke-width="1.99403" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.091 21.7039C19.091 24.0837 20.0363 26.366 21.7191 28.0488C23.4019 29.7316 25.6843 30.677 28.0641 30.677H37.0373" stroke="white" stroke-width="1.99403" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                <linearGradient id="paint0_linear_2_570" x1="28.0649" y1="0.51709" x2="28.0649" y2="56.3501" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF833D"/>
                <stop offset="1" stop-color="#FF650F"/>
                </linearGradient>
                </defs>
              </svg>
            </button>
          </div>

          <div className="supporter px-20">
            <h5 className="text-xl font-semibold pb-6">Undo supported by</h5>
            <div className="brand-logo flex items-center space-x-8">
              <svg width="104" height="48" viewBox="0 0 104 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.0167 31.9115L21.8999 31.8216L21.9615 33.6188C19.9962 33.9156 18.013 34.0785 16.0257 34.1066C13.8348 34.1066 12.2824 33.4725 11.3684 32.2042C10.4544 30.9359 9.99829 28.9624 10 26.2837C10 20.9487 12.1207 18.2803 16.362 18.2786C18.4159 18.2786 19.9478 18.852 20.9576 19.9988C21.9675 21.1455 22.4741 22.9427 22.4775 25.3903L22.3569 27.1259H12.3132C12.3132 28.8101 12.6179 30.0578 13.2272 30.8691C13.8365 31.6804 14.896 32.0861 16.4057 32.0861C17.9187 32.0912 19.4557 32.033 21.0167 31.9115ZM20.1951 25.3081C20.1951 23.4408 19.8964 22.122 19.2991 21.3518C18.7018 20.5816 17.7279 20.1956 16.3774 20.1939C15.027 20.1939 14.012 20.5995 13.3325 21.4108C12.653 22.2221 12.303 23.5212 12.2824 25.3081H20.1951Z" fill="white"/>
                <path d="M25.6611 33.9859V13.9603H27.9435V33.9859H25.6611Z" fill="white"/>
                <path d="M42.3185 23.1772V30.8537C42.3185 31.6239 44.2132 31.5828 44.2132 31.5828L44.0977 33.6008C42.493 33.6008 41.1657 33.7343 40.3698 32.9615C38.6463 33.727 36.7794 34.1165 34.8936 34.104C33.4952 34.104 32.4297 33.7078 31.6972 32.9153C30.9646 32.1229 30.5992 30.9838 30.6009 29.4981C30.6009 28.0159 30.9766 26.9247 31.728 26.2247C32.4794 25.5246 33.6561 25.0968 35.2581 24.941L40.0361 24.4866V23.1772C40.0361 22.1502 39.8135 21.4091 39.3685 20.9538C39.1247 20.7249 38.837 20.5478 38.5228 20.4331C38.2087 20.3184 37.8745 20.2684 37.5406 20.2863H31.5431V18.276H37.3891C39.1144 18.276 40.3672 18.6723 41.1477 19.4647C41.9282 20.2572 42.3185 21.4947 42.3185 23.1772ZM32.9398 29.3852C32.9398 31.2525 33.71 32.1862 35.2504 32.1862C36.6401 32.1846 38.0195 31.9476 39.33 31.4853L40.0283 31.2414V26.2196L35.5329 26.6457C34.6189 26.7279 33.959 26.9915 33.5534 27.4365C33.1477 27.8815 32.9432 28.5311 32.9398 29.3852Z" fill="white"/>
                <path d="M51.2297 20.3171C49.0166 20.3171 47.91 21.0873 47.91 22.6278C47.91 23.3398 48.1668 23.8421 48.6802 24.1348C49.1937 24.4275 50.3499 24.7322 52.1488 25.0488C53.9562 25.3655 55.2348 25.8071 55.9845 26.3736C56.7342 26.9401 57.1098 28.0047 57.1116 29.5674C57.1116 31.1318 56.6092 32.2786 55.6045 33.0077C54.5998 33.7369 53.1338 34.1023 51.2066 34.104C49.9485 34.104 45.7483 33.6368 45.7483 33.6368L45.8715 31.6599C48.2849 31.8909 50.0281 32.0629 51.2066 32.0629C52.385 32.0629 53.281 31.8755 53.8998 31.5007C54.5185 31.1258 54.8266 30.4968 54.8266 29.6136C54.8266 28.7305 54.5698 28.1323 54.0358 27.8165C53.5018 27.5007 52.3516 27.2029 50.5673 26.9179C48.7829 26.6329 47.5121 26.217 46.7624 25.6701C46.0127 25.1233 45.6353 24.1066 45.6353 22.6252C45.6353 21.1438 46.1488 20.0578 47.204 19.3389C48.2592 18.6201 49.5532 18.2735 51.1141 18.2735C52.3516 18.2735 56.6469 18.5893 56.6469 18.5893V20.579C54.3799 20.4789 52.5262 20.3171 51.2297 20.3171Z" fill="white"/>
                <path d="M68.113 20.5585H63.2734V27.8344C63.2734 29.5786 63.4001 30.7245 63.6534 31.2722C63.9101 31.8216 64.5109 32.0938 65.4634 32.0938L68.172 31.9115L68.3261 33.7985C67.3004 33.9881 66.262 34.1005 65.2195 34.1348C63.638 34.1348 62.5426 33.7489 61.9332 32.9769C61.3239 32.205 61.0201 30.7339 61.0218 28.5636V20.5585H58.8703V18.5816H61.0321V13.9243H63.2837V18.5816H68.113V20.5585Z" fill="white"/>
                <path d="M71.2862 16.6381V13.9885H73.5687V16.6381H71.2862ZM71.2862 33.9859V18.5816H73.5687V33.9859H71.2862Z" fill="white"/>
                <path d="M83.4557 18.276C84.5956 18.3247 85.731 18.4473 86.855 18.6432L87.5841 18.733L87.4942 20.5893C86.3015 20.4381 85.1018 20.3473 83.8999 20.3171C82.1746 20.3171 81.003 20.7279 80.3851 21.5495C79.7672 22.371 79.4574 23.8926 79.4557 26.1143C79.4557 28.3394 79.745 29.8867 80.3235 30.7561C80.902 31.6256 82.1087 32.0621 83.9435 32.0655L87.5379 31.7934L87.6303 33.6804C86.2311 33.9174 84.8176 34.0598 83.3992 34.1066C81.027 34.1066 79.3889 33.4973 78.4852 32.2786C77.5815 31.06 77.1296 29.006 77.1296 26.1169C77.1296 23.226 77.6166 21.1969 78.5905 20.0296C79.5644 18.8623 81.1861 18.2778 83.4557 18.276Z" fill="white"/>
              </svg>

              <svg width="128" height="48" viewBox="0 0 128 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M99.5917 31.6175C102.891 31.6175 105.574 28.9876 105.574 25.755C105.574 22.5222 102.891 19.8923 99.5917 19.8923C96.2933 19.8923 93.6095 22.5222 93.6095 25.755C93.6095 28.9876 96.2933 31.6175 99.5917 31.6175ZM105.574 11.1852H105.736H108.408V34.4148H105.574V32.0954C103.938 33.5811 101.829 34.395 99.5917 34.395C94.7307 34.395 90.7757 30.519 90.7757 25.755C90.7757 20.9906 94.7307 17.1148 99.5917 17.1148C101.829 17.1148 103.938 17.9285 105.574 19.4143V11.1852ZM40.8164 31.5152C44.115 31.5152 46.7986 28.8853 46.7986 25.6526C46.7986 22.42 44.115 19.79 40.8164 19.79C37.5177 19.79 34.8341 22.42 34.8341 25.6526C34.8341 28.8853 37.5177 31.5152 40.8164 31.5152ZM34.8341 19.3123C36.4697 17.8265 38.5793 17.0126 40.8164 17.0126C45.6776 17.0126 49.6327 20.8885 49.6327 25.6526C49.6327 30.4167 45.6776 34.2926 40.8164 34.2926C38.5793 34.2926 36.4697 33.4789 34.8341 31.9929V40.2222H32V16.9926H34.8341V19.3123ZM55.0402 24.3036C55.678 21.6782 58.0547 19.793 60.7656 19.793C63.4412 19.793 65.6824 21.6379 66.2797 24.3036H55.0402ZM60.7656 16.9926C55.9772 16.9926 52.0817 20.9006 52.0817 25.7037C52.0817 30.507 55.9772 34.4148 60.7656 34.4148C63.4471 34.4148 65.9081 33.4078 67.5188 31.6519L68.3556 30.7392L68.4634 30.6214L68.3461 30.5128L66.5268 28.8342L66.4095 28.7257L66.301 28.8435L65.4643 29.7563C64.397 30.9198 62.6406 31.6146 60.7656 31.6146C58.0547 31.6146 55.6782 29.7294 55.0402 27.1038H69.2243V25.7037C69.2243 20.819 65.5087 16.9926 60.7656 16.9926ZM125.166 25.7038C125.166 28.963 122.482 31.6145 119.183 31.6145C115.885 31.6145 113.201 28.963 113.201 25.7038C113.201 22.4444 115.885 19.7929 119.183 19.7929C122.482 19.7929 125.166 22.4444 125.166 25.7038ZM119.183 16.9926C114.322 16.9926 110.367 20.9004 110.367 25.7038C110.367 30.507 114.322 34.4148 119.183 34.4148C124.045 34.4148 128 30.507 128 25.7038C128 20.9004 124.045 16.9926 119.183 16.9926ZM79.7547 16.9926C77.7855 16.9926 75.9093 17.7425 74.4326 19.1122V16.9926H71.6735V34.4148H74.4326V25.524C74.4326 22.3519 76.8201 19.7711 79.7547 19.7711C82.6898 19.7711 85.0779 22.3519 85.0779 25.524V34.4148H87.8364V25.524C87.8364 20.8198 84.211 16.9926 79.7547 16.9926Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 27.7777H13.3333V40.8148L26.6667 27.7777V14.7407H13.3333L0 27.7777Z" fill="white"/>
              </svg>

              <svg width="134" height="48" viewBox="0 0 134 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2_580)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0838 24.6189C14.0838 17.7116 12.9244 14.8483 9.73702 14.8483C6.92584 14.8483 5.50588 16.8555 5.50588 23.8221C5.50588 30.6996 6.6071 33.5337 9.85284 33.5337C12.7217 33.5337 14.0838 31.5557 14.0838 24.6189ZM0 24.4419C0 16.6783 5.24505 13.6086 9.91098 13.6086C14.8952 13.6086 19.5896 16.6491 19.5896 23.9695C19.5896 31.7919 14.3446 34.7734 9.67866 34.7734C4.69466 34.7734 0 31.5264 0 24.4419Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.1914 24.9436L48.1466 24.6779C48.1466 21.1063 47.6833 19.8074 45.9444 19.8074C44.4663 19.8074 43.3072 21.2243 43.1914 24.9436ZM38.6128 26.6852C38.6128 21.549 42.3508 18.6856 46.1761 18.6856C50.1286 18.6856 52.609 20.6748 52.7502 25.8788C52.7531 25.98 52.6722 26.0653 52.5725 26.0653H43.3734C43.2736 26.0653 43.1929 26.1507 43.1954 26.2521C43.325 30.9409 45.1136 32.2348 48.0598 32.2348C49.4978 32.2348 50.6571 31.8945 51.6274 31.4562C51.6989 31.4237 51.7817 31.4428 51.8327 31.5036L52.2181 31.9653C52.2762 32.0349 52.2756 32.1379 52.2141 32.2042C51.157 33.3398 49.0049 34.7735 46.1761 34.7735C41.1337 34.7735 38.6128 31.7035 38.6128 26.6852Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M98.2864 26.9214C98.2864 20.9586 97.1565 19.8369 95.1857 19.8369C93.3599 19.8369 92.2878 21.1948 92.2878 26.2721C92.2878 32.3236 93.244 33.622 95.3594 33.622C97.0985 33.622 98.2864 32.589 98.2864 26.9214ZM87.4194 26.7739C87.4194 21.1061 91.3604 18.6857 95.2728 18.6857C99.4747 18.6857 103.155 21.2538 103.155 26.6262C103.155 32.2938 99.2718 34.7737 95.2728 34.7737C91.0708 34.7737 87.4194 32.1756 87.4194 26.7739Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M115.571 26.9214C115.571 20.9586 114.441 19.8369 112.471 19.8369C110.645 19.8369 109.573 21.1948 109.573 26.2721C109.573 32.3236 110.529 33.622 112.645 33.622C114.383 33.622 115.571 32.589 115.571 26.9214ZM104.704 26.7739C104.704 21.1061 108.645 18.6857 112.557 18.6857C116.759 18.6857 120.44 21.2538 120.44 26.6262C120.44 32.2938 116.557 34.7737 112.557 34.7737C108.356 34.7737 104.704 32.1756 104.704 26.7739Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M64.6631 18.6857C62.5477 18.6857 60.6351 19.6599 59.0993 20.7814H58.9833L59.0403 18.9203C59.0447 18.7776 58.924 18.6643 58.785 18.6802L54.7298 19.1485C54.6107 19.1621 54.5205 19.2647 54.5205 19.387V34.1852C54.5205 34.3145 54.6234 34.4191 54.7501 34.4191H58.8984C59.0251 34.4191 59.128 34.3145 59.128 34.1852V21.8147C59.7655 21.667 60.8088 21.431 61.8234 21.431C63.1852 21.431 63.8229 21.9919 63.8229 23.7924V34.1852C63.8229 34.3145 63.9258 34.4191 64.0526 34.4191H68.2298C68.3565 34.4191 68.4597 34.3145 68.4597 34.1852V22.6414C68.4597 19.9846 67.1266 18.6857 64.6631 18.6857Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M80.8919 31.7919C80.4281 31.9691 79.6457 32.4415 78.4576 32.4415C76.2551 32.4415 75.096 30.9359 75.096 26.3015C75.096 21.4307 76.5449 19.8664 78.6313 19.8664C79.7038 19.8664 80.3992 20.4862 80.8919 21.1061V31.7919ZM85.4995 15.7929C85.4995 14.267 85.5505 12.8651 85.5774 12.2897C85.5852 12.1214 85.4449 11.9862 85.2803 12.0011L81.1066 12.4839C80.985 12.4951 80.8919 12.5988 80.8919 12.7233V16.8556C80.8919 17.9181 80.9498 19.0103 80.9498 19.0103C80.3413 18.8331 79.5298 18.6856 78.7476 18.6856C74.2267 18.6856 70.3432 21.1358 70.3432 27.2758C70.3432 32.648 73.1542 34.7735 76.0233 34.7735C78.0518 34.7735 79.6746 33.9469 80.9208 32.8549H81.0367L80.9779 34.4842C80.9712 34.6577 81.12 34.795 81.2886 34.7707L85.2645 34.3185C85.3992 34.2995 85.4995 34.182 85.4995 34.0433V15.7929Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M131.209 18.6857C129.529 18.6857 127.877 19.9846 126.979 20.9586H126.863L126.919 18.9749C126.924 18.8061 126.781 18.6718 126.616 18.6907L122.609 19.1487C122.49 19.1624 122.4 19.2649 122.4 19.3874V34.1414C122.4 34.2947 122.522 34.4191 122.673 34.4191H126.735C126.885 34.4191 127.008 34.2947 127.008 34.1414V22.169C127.413 21.7852 128.08 21.4013 128.601 21.4013C128.862 21.4013 129.036 21.4605 129.21 21.7852C129.761 22.7002 130.196 23.2291 131.441 23.2291C132.572 23.2291 133.582 22.3165 133.582 20.8996C133.582 19.453 132.6 18.6857 131.209 18.6857Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.65 33.5926C27.6646 33.5926 26.8824 33.1497 26.3605 32.5299V21.785C26.8242 21.6081 27.5488 21.2537 28.7079 21.2537C30.9104 21.2537 32.1566 22.7296 32.1566 26.9508C32.1566 32.3529 30.9393 33.5926 28.65 33.5926ZM31.2291 18.6858C29.2004 18.6858 27.578 19.6598 26.3605 20.7225H26.2157L26.2716 18.9562C26.2768 18.7954 26.1404 18.6672 25.9836 18.6853L21.9623 19.1484C21.8429 19.1622 21.7529 19.265 21.7529 19.3873V40.7615C21.7529 40.9047 21.8752 41.0163 22.0151 41.0002L26.1514 40.5242C26.2705 40.5106 26.3605 40.4078 26.3605 40.2855V36.279C26.3605 35.2459 26.3318 34.4784 26.3318 34.4784C26.9692 34.6554 27.9257 34.7733 28.5342 34.7733C33.3736 34.7733 36.909 32.0872 36.909 25.9473C36.909 20.5453 33.9822 18.6858 31.2291 18.6858Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_2_580">
                <rect width="134" height="48" fill="white"/>
                </clipPath>
                </defs>
              </svg>

            </div>
          </div>
        </div>

        <div className="hero-image col-span-7 relative h-full">
          <img src="./image-hero.png" className="h-full w-full overflow-hidden" alt="hero-image" />
          <div className="overlay w-full h-full absolute top-0 right-0 z-20" style={{ background:  'linear-gradient(180deg, #000000 -108.77%, rgba(0, 0, 0, 0) 33.2%)' }}></div>
          <img className="absolute bottom-0 left-0 z-30 w-9/12" src="./image-hero-info.png" alt="hero-info" />
        </div>
      </div>
    </section>
  )
}