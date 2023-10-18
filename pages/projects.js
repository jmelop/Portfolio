import React from "react";
import Publications from "../components/Publications";
import { getAllFilesMetadata } from "../lib/mdx";
import Head from "next/head";

export default function Projects({ projects }) {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <Publications projects={projects} />
        </>
    )
}

export async function getStaticProps() {
    const projects = await getAllFilesMetadata();
    projects.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return {
        props: { projects },
    }
}