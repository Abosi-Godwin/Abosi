import { MetadataRoute } from "next";
import { caseStudies } from "./utils/assets";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://abosi.vercel.app";
    const projectUrls: MetadataRoute.Sitemap = caseStudies.map(project => ({
        url: `${baseUrl}/projects/${project.title.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8
        },
        ...projectUrls
    ];
}
