import { worksSectionType } from "@/app/lib/definitions";
import { mulish } from "../../font";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function WorkCard({
  work,
  index,
}: {
  work: worksSectionType;
  index: Number;
}) {
  return (
    <div
      key={`work-${index}`}
      className={`mt-16 rounded-xl py-6 px-8 lg:px-16 drop-shadow-xl min-h-[458px] overflow-hidden flex md:space-x-6 align-middle items-center h-full`}
      style={{ backgroundColor: work.bgColor }}
    >
      <div className="flex-1">
        <div className="mb-4">
        {work.tags.map((tag, tIndex) => (
          <span
            key={`work-${index}-tag-${tIndex}`}
            className={`${mulish.className} inline-block text-sm px-3 py-2 rounded-lg mb-2 mr-4`}
            style={{ backgroundColor: tag.bgColor, color: tag.color }}
          >
            {tag.tagName}
          </span>
        ))}
        </div>

        <div className=" mb-2">
          {work.label.map((label, lIndex) => (
            <h2
              key={`work-${index}-label-${lIndex}`}
              className="text-3xl lg:text-4xl dark-blue-text"
            >
              {label}
            </h2>
          ))}
        </div>

        <p className={`${mulish.className} gray-text mb-6`}>2024</p>
        
        <Link
          href={work.button.isActive ? work.button.link : "#"}
          className={`${mulish.className} inline-flex items-center text-sm text-white px-8 py-3 rounded-lg`}
          style={{backgroundColor: work.button.bgColor}}
        >
          {work.button.label}
          <span className="ml-2">
            <ArrowUpRightIcon className="text-white h-4 w-4" />
          </span>
        </Link>
      </div>

      {/* Right Section - Image */}
      <div className="flex-shrink-0 hidden md:block">
        <Image src={`${work.logo}`} className="object-contain" alt="Logo" width={250} height={250} />
      </div>
    </div>
  );
}
