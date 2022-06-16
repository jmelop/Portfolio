import React from "react";
import Publications from "../components/Publications";
import { getAllFilesMetadata } from "../lib/mdx";

export default function Projects({ projects }) {
    return (
        <>
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