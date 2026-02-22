import Image from "next/image";
import Link from "next/link";

const Project = ({ data }) => {
    const { title, shortDescription, thumbnail, tags, liveUrl } = data;

    return (
        <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* image */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* content */}
            <div className="p-5 flex flex-col gap-3">
                {/* title */}
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {title}
                </h3>

                {/* description */}
                <p className="text-sm text-gray-600 line-clamp-3">
                    {shortDescription}
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                    {tags.map(tag => (
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
                        href={liveUrl}
                        target="_blank"
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        View Live →
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default Project;