import Link from "next/link";

export default function ProgramServices({programs}) {
  return (
    <div className="program-services min-w-max">
      <img className="pb-6 h-[27rem] w-full object-cover" src={programs.imageUrl} alt="program-img" />
      <Link href="/programs">
        <h5 className="title cursor-pointer mb-2 text-2xl font-semibold border-b-4 border-white transform ease-in-out w-fit duration-1000 hover:border-gray-dark">{programs.title}</h5>
      </Link>
      <p className="minutes text-gray-dark text-opacity-60 font-medium text-base">
        <span>{programs.minutes}</span>
        <span className="pl-2">Minutes</span>
      </p>
    </div>
  );
}
