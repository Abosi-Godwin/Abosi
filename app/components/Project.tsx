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
      <a href={`/projects/${data.slug}`}>
        <div className="w-full relative min-w-full h-52">
          <Image
            src={data.thumbnail}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="py-4 px-2 ">
          <h1 className="font-bold text-xl">{data.title}</h1>
          <p className="tracking-tight pb-4">{data.shortDescription}</p>
          <ul className="flex flex-wrap gap-2 pt-2">
            {data.tags.map((tag) => (
              <li
                key={tag}
                className="bg-gray-50 text-sm px-0.5 rounded-md lowercase"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </div>
  );
};

export default Project;
