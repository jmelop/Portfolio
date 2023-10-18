import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from "path";

const root = process.cwd();

export const getFiles = () => {
    return fs.readdirSync(path.join(root, 'data', 'projects'))
};

export const getFileBySlug = async (slug) => {
    const mdxSource = fs.readFileSync(
        path.join(root, "data", "projects", `${slug}.mdx`),
        "utf-8"
    )
    const { data, content } = await matter(mdxSource);
    const source = await serialize(content, {});
    return {
        source,
        frontmatter: {
            slug,
            ...data,
        }
    }
};

export const getAllFilesMetadata = () => {
    const files = getFiles();
    return files.reduce((allProjects, projectSlug) => {
        const mdxSource = fs.readFileSync(path.join(root, "data", "projects", projectSlug), 'utf-8')
        const { data } = matter(mdxSource);
        return [{ ...data, slug: projectSlug.replace('.mdx', '') }, ...allProjects]
    }, []);
};