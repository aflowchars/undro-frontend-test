import Link from "next/link";
import { motion } from "framer-motion";
export default function ProgramServices({programs}) {
  return (
    <motion.div className="item min-w-max h-full">
      <img className="pointer-events-none pb-6 h-[27rem] w-full object-cover" src={programs.imageUrl} alt={programs.title} />
      <Link href="/programs">
        <h5 className="cursor-pointer mb-2 text-2xl font-semibold border-b-4 border-white transform ease-in-out w-fit duration-700 hover:border-gray-dark">{programs.title}</h5>
      </Link>
      <p className="text-gray-dark text-opacity-60 font-medium text-base">
        <span>{programs.minutes}</span>
        <span className="pl-1">Minutes</span>
      </p>
    </motion.div>
  );
}
