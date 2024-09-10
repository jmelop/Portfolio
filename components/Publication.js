import React from "react";
import Image from "next/image";
import Link from "next/link";

function Publication(props) {
  const [isLoading, setLoading] = React.useState(true);

  return (
    <>
      <div className="relative w-full rounded-lg bg-main mb-2">
        <div className="-mb-2">
          <div
            style={{
              position: "relative",
              width: "100%"
            }}
          >
            <Link
              aria-label="Learn more"
              href={`/projects/${props.href}`}
              legacyBehavior
            >
              <Image
                priority
                {...props.images[0].img}
                alt={props.title}
                placeholder='blur'
                blurDataURL={props.images[0].base64}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className="pb-0 rounded-t-lg" 
              />
            </Link>
          </div>
        </div>
        <div className="px-5 pb-5 border-x-2 border-b-2 border-gray-600 rounded-b-lg">
          <Link
            aria-label={props.title}
            href={`/projects/${props.href}`}
            legacyBehavior
          >
            <h5 className="text-xl pt-4 font-semibold tracking-tight text-white cursor-pointer">
              {props.title}
            </h5>
          </Link>
          <div className="flex items-center mt-2.5 mb-5">
            <p className="text-gray-200">{props.description}</p>
          </div>
          <div className="mt-2.5 flex">
            <Link
              aria-label="Learn more"
              href={`/projects/${props.href}`}
              className="text-white hover:text-gray-300 mr-1 font-semibold underline underline-offset-2 
                        decoration-sky-500"
            >
              Learn more
            </Link>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white hover:text-gray-300 mt-0.5 cursor-pointer"
            >
              <path
                d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 
                            16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Publication;

{/* <DynamicImage url={'https://firebasestorage.googleapis.com/v0/b/portfolio-4bb89.appspot.com/o/Projects%2Fbanner.png?alt=media&token=e566b0ba-3081-41ea-9900-497d9f37aa42'} alt={'hjhj'} /> */}