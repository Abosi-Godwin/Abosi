import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link"; // [!code ++]
import { FaArrowRightLong } from "react-icons/fa6";

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
        <div className="group w-full rounded-md overflow-hidden shadow-xl shadow-gray-200">
            {/* Image Container */}
            <div className="relative h-52 w-full overflow-hidden cursor-pointer">
                <Link href={`/projects/${data.slug}`}>
                    <Image
                        src={data.thumbnail}
                        alt={data.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                    />
                </Link>
            </div>

            {/* Content */}
            <div className="px-2 py-4">
              
                <h1 className="text-xl font-bold transition-colors group-hover:text-secondary">
                    {data.title}
                </h1>

                <ul className="flex flex-wrap gap-2 pb-4 pt-2">
                    {data.tags.map(tag => (
                        <li
                            key={tag}
                            className="rounded-md bg-gray-100 px-1.5 py-0.5 text-sm"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>

                <p
                    className="pb-4 tracking-tight text-gray-600 leading-relaxed
                text-gray-700"
                >
                    {data.shortDescription}
                </p>

                {/* Button */}
                <Link
                    href={`/projects/${data.slug}`}
                    className="bg-secondary flex w-fit items-center justify-center gap-2 rounded-md px-4 py-2 font-extrabold text-white transition-all duration-300 hover:brightness-110"
                >
                    Case study
                    <FaArrowRightLong className="transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
            </div>
        </div>
    );
};

export default Project;
