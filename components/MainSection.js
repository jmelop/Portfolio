import React from "react";
import Link from 'next/link';

function MainSection() {
    return (
        <>
            <div className="px-6 my-16">
                <div className="relative max-w-2xl mx-auto p-12">
                    <h1 className="text-white text-5xl font-semibold">Hello.</h1>
                    <div className="mt-8 prose">
                        <p className="text-gray-300 text-lg">I am Juan Melo, a software developer passionate about open source and Full Stack Development
                            trying to build new things. Focused on reading, learning, and building.</p>
                        <div className="mt-4">
                            <p className="text-gray-300 text-lg inline">Sometimes, I write </p>
                            <Link href="/blog">
                                <a target="_blank" rel="noreferrer"
                                    className="text-white text-lg underline decoration-sky-500 hover:text-gray-300">blog posts</a>
                            </Link>
                            <p className="text-gray-300 text-lg inline"> and I have a </p>
                            <Link href="/projects">
                                <a target="_blank" rel="noreferrer"
                                    className="text-white text-lg underline decoration-sky-500 hover:text-gray-300">todo list</a>
                            </Link>
                            <p className="text-gray-300 text-lg inline"> to keep track of my open source projects.</p>
                        </div>
                        <div className="mt-12 text-gray-300">
                            <span>Find me on </span>
                            <Link href="https://github.com/juanmlp">
                                <a target="_blank" rel="noreferrer"
                                    className="text-white underline decoration-sky-500 hover:text-gray-300">Github,</a>
                            </Link>
                            <span>{' '}</span>
                            <Link href="https://www.linkedin.com/in/juan-melo-p%C3%A9rez">
                                <a target="_blank" rel="noreferrer"
                                    className="text-white underline decoration-sky-500 hover:text-gray-300">Linkedin,</a>
                            </Link>
                            <span>{' '}</span>
                            <Link href="https://www.instagram.com/jmelopdev/">
                                <a target="_blank" rel="noreferrer"
                                    className="text-white underline decoration-sky-500 hover:text-gray-300">Instagram,</a>
                            </Link>
                            <span>{' '}</span>
                            <Link href="https://twitter.com/jmelop_">
                                <a target="_blank" rel="noreferrer"
                                    className="text-white underline decoration-sky-500 hover:text-gray-300">Twitter</a>
                            </Link>
                            <span>{' '}</span>
                            <span>or mail me at </span>
                            <Link href="mailto:jmelopdev@gmail.com">
                                <a className="text-white hover:text-gray-300">jmelopdev@gmail.com</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSection;