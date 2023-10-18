import React from "react";
import Publications from "../components/Publications";
import { getAllFilesMetadata } from "../lib/mdx";
import Head from "next/head";

export async function getStaticProps() {
    const projects = await getAllFilesMetadata();
    projects.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return {
        props: { projects },
    }
}

export default function Projects({ projects }) {
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta
                    name="description"
                    content="Explore a collection of Angular and React projects on this index page. Discover web 
                applications, components, and tools developed by Juan Melo." />
            </Head>
            <Publications projects={projects} />
        </>
    )
}