import React from "react";
import './MainSection.css';

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
                            <a href="/blog" target="_blank" rel="noreferrer"
                                className="text-white text-lg underline decoration-sky-500 hover:text-gray-300">blog posts</a>
                            <p className="text-gray-300 text-lg inline"> and I have a </p>
                            <a href="/projects" target="_blank" rel="noreferrer"
                                className="text-white text-lg underline decoration-sky-500 hover:text-gray-300">todo list</a>
                            <p className="text-gray-300 text-lg inline"> to keep track of my open source projects.</p>
                        </div>
                        <div className="mt-12 text-gray-300">
                            <span>Find me on </span>
                            <a href="https://github.com/juanmlp" target="_blank" rel="noreferrer"
                                className="text-white underline decoration-sky-500 hover:text-gray-300">Github,</a>
                            <span>{' '}</span>
                            <a href="https://www.linkedin.com/in/juan-melo-p%C3%A9rez" target="_blank" rel="noreferrer"
                                className="text-white underline decoration-sky-500 hover:text-gray-300">Linkedin,</a>
                            <span>{' '}</span>
                            <a href="https://www.instagram.com/jmelopdev/" target="_blank" rel="noreferrer"
                                className="text-white underline decoration-sky-500 hover:text-gray-300">Instagram,</a>
                            <span>{' '}</span>
                            <a href="https://twitter.com/jmelop_" target="_blank" rel="noreferrer"
                                className="text-white underline decoration-sky-500 hover:text-gray-300">Twitter</a>
                            <span>{' '}</span>
                            <span>or mail me at </span>
                            <a href="mailto:jmelopdev@gmail.com" className="text-white hover:text-gray-300">jmelopdev@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSection;