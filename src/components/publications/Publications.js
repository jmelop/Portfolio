import React from "react";
import Publication from "../publication/Publication";
import './Publications.css';

function Publications() {
    return (
        <>
            <div className="px-6 my-16">
                <div className="relative max-w-5xl mx-auto">
                    <div className="p-8">
                        <h1 className="text-white text-5xl font-bold">Projects</h1>
                    </div>
                    <div className="mt-16">
                        <div className="relative inline-grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
                            <div>
                                <Publication
                                    src="images/projects/project1.png"
                                    title="CryptoKeeper"
                                    description="Open source app that allow to save your crypto data and check the market in real live."
                                />
                            </div>
                            <div>
                                <Publication
                                    src="images/projects/project3.png"
                                    title="Raptor"
                                    description="Raptor is a ecommerce where you can buy the last drones of the market."
                                />
                            </div>
                            <div>
                                <Publication
                                    src="images/projects/project2.png"
                                    title="Quizz"
                                    description="Quizz will help you to learn new languages. Save your vocabulary and play to learn new words."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Publications;