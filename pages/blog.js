import Head from "next/head";
import React from "react";

function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Explore a collection of blogs articles on this index page by Juan Melo."
        />
      </Head>
      <div className="px-6 my-16">
        <div className="relative max-w-5xl mx-auto">
          <div className="p-8">
            <h1 className="text-white text-5xl font-bold">Blog</h1>
          </div>
          <div className="mt-16">
            <p className="text-gray-300 text-center">
              There are no published blogs!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
