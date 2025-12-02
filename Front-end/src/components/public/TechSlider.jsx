import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import reactLogo from "../../assets/images/public/react.svg";
import tailwindLogo from "../../assets/images/public/tailwind.svg";
import nodeLogo from "../../assets/images/public/node.svg";
import sequelizeLogo from "../../assets/images/public/sequelize.svg";
import mySqlLogo from "../../assets/images/public/mysql.svg";
import redisLogo from "../../assets/images/public/redis.svg";
import expressLogo from "../../assets/images/public/express.svg";
import javaScriptLogo from "../../assets/images/public/javaScript.svg";
import socketIoLogo from "../../assets/images/public/socket.io.svg";

export default function TechSlider() {
  const logos = [
    { src: tailwindLogo, alt: "Tailwind CSS", name: "Tailwind CSS" },
    { src: javaScriptLogo, alt: "JavaScript", name: "JavaScript" },
    { src: reactLogo, alt: "React JS", name: "React" },
    { src: nodeLogo, alt: "Node JS", name: "Node JS" },
    { src: expressLogo, alt: "Express JS", name: "Express JS" },
    { src: mySqlLogo, alt: "MySql", name: "MySql" },
    { src: sequelizeLogo, alt: "Sequelize ORM", name: "Sequelize" },
    { src: redisLogo, alt: "Redis", name: "Redis" },
    { src: socketIoLogo, alt: "Socket.io", name: "Socket.io" },
  ];

  return (
    <div className="w-full py-6">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        className="mySwiper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="flex flex-col items-center group">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-23 opacity-75 group-hover:opacity-100 cursor-pointer transition"
              />
              <p className="text-[#93A3B6] mt-2 cursor-pointer">{logo.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
