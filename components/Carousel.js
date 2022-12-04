import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "./media";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import Image from "next/image";
import React from 'react';
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
        slidesPerView={2}
        spaceBetween={30}
        navigation={true}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {project?.screenshots?.map((slide, index) => (
          <SwiperSlide key={index} className="rounded-md">
            <Image className="rounded-md" width='525' height='355' src={slide} alt="blog" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}