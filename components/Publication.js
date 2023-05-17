import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import raptorImage from '../public/dummies/images/banners_raptor.png';

function Publication(props) {
    return (
        <>
            <div className="relative w-full bg-white rounded-lg bg-main mb-2">
                <div className="-mb-2">
                    <Link href={props.href}>
                        <Image width='525'
                            height='355' className="rounded-t-lg object-cover w-full h-80 m-auto cursor-pointer"
                            src={props.title !== 'Raptor' ? props.src : raptorImage} alt="blog" priority />
                    </Link>
                </div>
                <div className="px-5 pb-5 border-x-2 border-b-2 border-gray-600 rounded-b-lg">
                    <Link href={props.href}>
                        <h5 className="text-xl pt-4 font-semibold tracking-tight text-white cursor-pointer">{props.title}</h5>
                    </Link>
                    <div className="flex items-center mt-2.5 mb-5">
                        <p className="text-gray-200">{props.description}</p>
                    </div>
                    <div className="mt-2.5 flex">
                        <Link href={props.href}>
                            <a className="text-white hover:text-gray-300 mr-1 font-semibold underline underline-offset-2 
                            decoration-sky-500">Learn more</a>
                        </Link>
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