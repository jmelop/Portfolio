import React from "react";
import './Posts.css';

function Posts() {
    return (
        <>
            <div className="px-6 my-16">
                <div className="relative max-w-2xl mx-auto">
                    <div className="p-8">
                        <h1 className="text-white text-5xl font-bold">Blog</h1>
                    </div>
                    <div className="mt-16">
                        <p className="text-gray-300 text-center">There are no published blogs!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts;