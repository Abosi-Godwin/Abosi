import Image from "next/image";
import Link from "next/link";
import { ProjectsProps } from "../utils/types";

const Project = ({ data }: { data: ProjectsProps }) => {
    const { title, shortDescription, thumbnail, tags, liveUrl, slug } = data;

    return (
        <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* image */}
            <Link href={`/projects/${slug}`}>
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </Link>

            {/* content */}
            <div className="p-5 flex flex-col gap-3">
                <Link href={`/projects/${slug}`}>
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 hover:underline">
                        {title}
                    </h3>
                </Link>

                <p className="text-sm text-gray-600 line-clamp-3">
                    {shortDescription}
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                    {tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* CTA */}
                <div className="pt-3 mt-auto flex items-center justify-between">
                    <Link
                        href={`/projects/${slug}`}
                        className="text-sm font-semibold text-primary hover:opacity-80 transition-colors"
                    >
                        Case Study →
                    </Link>

                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            Live ↗
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default Project;
