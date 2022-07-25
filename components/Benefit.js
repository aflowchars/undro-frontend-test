export default function Benefit() {
  return (
    <section className="benefit px-20 py-40">
      <div className="heading mb-40 flex flex-col items-center text-center">
        <h3 className="text-[4rem] font-semibold text-gray-dark pb-4">Easier get gealty with no effort</h3>
        <p className="w-[50rem] font-medium text-gray-dark text-opacity-60 text-xl">Gold and silver will lose value with health.Health is a true treasure because it is the source of people's happiness. Health and intelligence are the two blessings of life</p>
      </div>

      <div className="wrapper grid grid-cols-12">
        <div className="text-info col-span-6 text-gray-dark flex flex-col items-start justify-between">
          <div className="info-top">
            <div className="tag mb-4 space-x-4">
              <a className="py-2 px-4 text-primary text-lg font-medium bg-primary bg-opacity-20 rounded-full" href="#">Undro</a>
              <a className="py-2 px-4 text-primary text-lg font-medium bg-primary bg-opacity-20 rounded-full" href="#">Workout</a>
            </div>
            <h4 className="font-semibold text-[4rem] w-9/12">Don't think too much, we are here</h4>
          </div>

          <div className="info-bottom">
            <p className="mb-6 text-2xl font-medium w-9/12">You don't have to bother thinking about your movements in a workout. Undro is here by providing a variety of workout moves.</p>
            <button className="text-xl font-semibold border border-gray-light py-4 px-8 rounded-full">Read More</button>
          </div>
        </div>

        <div className="image col-span-6">
          <img className="w-full" src="./image-benefit.png" alt="benefit-ill" />
        </div>
      </div>
    </section>
  )
}