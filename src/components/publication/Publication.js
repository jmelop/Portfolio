import React from "react";
import './Publication.css';

function Publication(props) {
    return (
        <>
            <div className="relative w-full bg-white rounded-lg bg-main mb-2">
                <div className="aspect-h-4 aspect-w-3">
                    <img className="rounded-t-lg object-cover w-full h-80 m-auto cursor-pointer" src={props.src} alt="blog" />
                </div>
                <div className="px-5 pb-5 border-x-2 border-b-2 border-gray-600 rounded-b-lg">
                    <a href="/">
                        <h5 className="text-xl pt-2 font-semibold tracking-tight text-white">{props.title}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <p className="text-gray-200">{props.description}</p>
                    </div>
                    <div className="mt-2.5 flex underline underline-offset-2 decoration-sky-500">
                        <a href="/" className="text-white hover:text-gray-300 mr-1 font-semibold">Learn more</a>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-white hover:text-gray-300 mt-0.5 cursor-pointer">
                            <path
                                d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 
                                16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                                fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Publication;