
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
 

export  function ImageSwiper({images}) {


  return (
  
      <Swiper  // install Swiper modules 
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true} 
          autoplay={{ delay: 10000,reverseDirection:false,pauseOnMouseEnter:true}}
        breakpoints={{
          480: { slidesPerView: 1 },
          740: { slidesPerView: 1},
          1000: { slidesPerView: 1},
        }}
        navigation={true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      
      >
        
        {images.map((url) => {
          return (
            <SwiperSlide key={url} className="p-0 m-0 h-[350px] w-full  relative">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <img className="w-full h-full object-cover" src={url} alt="image not workin" />
          </div>
        </SwiperSlide>
          )
          

        })}
          </Swiper>
         
    
  );
}

