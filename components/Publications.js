import React from "react";
import Publication from "./Publication";

export default function Publications({ projects }) {
    return (
        <>
            <div className="px-6 my-16">
                <div className="relative max-w-5xl mx-auto">
                    <div className="p-8">
                        <h1 className="text-white text-5xl font-bold">Projects</h1>
                    </div>
                    <div className="mt-16">
                        <div className="relative inline-grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
                            {projects.map((project) => (
                                <Publication
                                    key={project.slug}
                                    src={project.banner}
                                    title={project.title}
                                    description={project.description}
                                    href={project.slug}
                                    images={project.images}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}