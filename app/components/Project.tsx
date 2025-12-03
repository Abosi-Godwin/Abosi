import Image from "next/image";
import type { StaticImageData } from "next/image";

interface ProjectProps {
  data: {
    id: number;
    slug: string;
    title: string;
    shortDescription: string;
    thumbnail: StaticImageData;
    tags: Array<string>;
    liveUrl: string;
  };
}

const Project = ({ data }: ProjectProps) => {
  return (
    <div className="w-full shadow-xl shadow-gray-200 rounded-md overflow-hidden">
      <div className="w-full relative min-w-full h-52">
        <a
          href={`/projects/${data.slug}`}
          className="inline-block
           bg-secondary text-white rounded-md px-4 py-2  font-extrabold"
        >
          <Image
            src={data.thumbnail}
            alt={data.title}
            fill
            className="object-cover"
          />
        </a>
      </div>
      <div className="py-4 px-2 ">
        <h1 className="font-bold text-xl">{data.title}</h1>
 
        <ul className="flex flex-wrap gap-2 pt-2 pb-4">
          {data.tags.map((tag) => (
            <li
              key={tag}
              className="bg-gray-50 text-sm px-0.5 rounded-md lowercase"
            >
              {tag}
            </li>
          ))}
        </ul>
       <p className="tracking-tight pb-4">{data.shortDescription}</p>
        <a
          href={`/projects/${data.slug}`}
          className="inline-block
           bg-secondary text-white rounded-md px-4 py-2  font-extrabold"
        >
          Case study
        </a>
      </div>
    </div>
  );
};

export default Project;
