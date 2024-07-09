import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "./media";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import React from "react";
import { isMobile } from "react-device-detect";
import "swiper/css";
import "swiper/css/pagination";
import cn from "clsx";

export const Carousel = (props) => {
  const [project, setProject] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const selectProject = projects.find(
      (selectProject) => selectProject.title === props.title
    );
    setProject(selectProject);
  }, [props.title]);

  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        navigation={true}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {project?.screenshots?.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={isMobile ? "" : "swiper-slide-desktop"}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "60%",
              }}
            >
              <Image
                priority
                className={cn(
                  "duration-700 ease-in-out",
                  isLoading
                    ? "grayscale blur-2xl scale-110 rounded-md"
                    : "grayscale-0 blur-0 scale-100 rounded-md"
                )}
                onLoadingComplete={() => setLoading(false)}
                fill
                src={slide}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="blog"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
