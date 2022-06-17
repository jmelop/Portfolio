import { getFileBySlug, getFiles } from "../lib/mdx";
import { MDXRemote } from 'next-mdx-remote';
import MDXComponents from "../components/MDXComponents";

export default function Project({ source, frontmatter }) {
    return (
        <div className="px-6 my-16 mdx">
            <div className="relative max-w-5xl mx-auto text-center">
                <MDXRemote {...source} />
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug(params.slug);
    return {
        props: { source, frontmatter },
    }
}

export async function getStaticPaths() {
    const projects = await getFiles();
    const paths = projects.map((project) => ({
        params: {
            slug: project.replace(/\.mdx/, "")
        }
    }));
    return {
        paths,
        fallback: false,
    }
}