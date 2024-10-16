import WorkCard from "./workcard";
import { myWorks } from "@/portfolio";

export default function Works() {
  return (
    <div className="w-full lg:w-3/4 mx-auto pt-24 px-8" id="works">
      <div className="flex items-center justify-center">
        <div className="border-t border-[#CCCCCC] flex-grow"></div>
        <span className="px-4 font-bold dark-blue-text text-lg tracking-widest">
          WORKS
        </span>
        <div className="border-t border-[#CCCCCC] flex-grow"></div>
      </div>
      <div>
        {myWorks.map((work, index) => (
            <WorkCard work={work} index={index} />
        ))}

      </div>
    </div>
  );
}
