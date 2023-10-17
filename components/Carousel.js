import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "./media";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import Image from "next/image";
import React from 'react';
import { isMobile } from 'react-device-detect';
import "swiper/css";
import "swiper/css/pagination";

export const Carousel = (props) => {
  const [project, setProject] = React.useState([]);

  React.useEffect(() => {
    const selectProject = projects.find(selectProject => selectProject.title === props.title);
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
          <SwiperSlide key={index} className={isMobile ? "" : "swiper-slide-desktop" }>
            <div style={{ position: "relative", width: "100%", paddingBottom: "60%" }} >
              <Image priority className="rounded-md" fill src={slide} alt="blog" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}