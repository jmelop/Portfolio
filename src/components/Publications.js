import React from "react";
import '../App.css';
import './Publications.css';

function Publications() {
    return (
        <>
            <div className="px-6 my-16">
                <div className="relative max-w-2xl mx-auto">
                    <div className="p-8">
                        <h1 className="text-white text-5xl font-bold">Projects</h1>
                    </div>
                    <div className="mt-16">
                        <p className="text-gray-300 text-center">There are no published projects!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Publications;