import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Container from "../layout/Container";

const PopularToday = () => {
  const banners = [
    {
      id: 1,
      title: "Comic Name 1",
      year: 2020,
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Ongoing",
      genre: ["Action", "Adventure"],
      rating: 9.7,
      image: "/banners/trending.jpg",
      type: "Manhwa",
    },
    {
      id: 2,
      title: "Comic Name 2",
      year: 2021,
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Ongoing",
      genre: ["Fantasy", "Drama"],
      rating: 9.5,
      image: "/banners/trending.jpg",
      type: "Manhua",
    },
    {
      id: 3,
      title: "Comic Name 3",
      year: 2019,
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "Completed",
      genre: ["Action", "Comedy"],
      rating: 9.2,
      image: "/banners/trending.jpg",
      type: "Manga",
    },
  ];


  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-purple-950">Popular Today</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="rounded-lg shadow-lg"
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative flex text-white rounded-lg overflow-hidden cursor-pointer group transition-transform duration-200 hover:scale-[1.01]">
              {/* Background ảnh mờ */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${item.image})`,
                  filter: 'blur(16px)',
                  transform: 'scale(1.1)'
                }}
              ></div>

              {/* Overlay tối */}
              <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

              {/* Ảnh chính */}
              <img
                src={item.image}
                alt={item.title}
                className="relative z-10 object-cover h-50 w-auto flex-shrink-0 overflow-hidden rounded-lg items-center my-auto ml-4"
              />

              {/* Nội dung */}
              <div className="relative z-10 p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold truncate line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-yellow-300 text-sm">{item.year}</p>
                  <p className="text-sm mt-2 font-semibold">Summary</p>
                  <p className="text-sm text-gray-200 line-clamp-1">{item.summary}</p>
                  <p className="text-sm mt-2">
                    <b>Status:</b> {item.status}
                  </p>
                  <p className="text-sm">
                    <b>Type:</b> {item.type}
                  </p>

                  {/* Genre */}
                  <div className="mt-2 flex gap-2">
                    {item.genre.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-yellow-300 text-purple-950 text-xs px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="ml-auto bg-yellow-300 text-purple-950 font-bold px-2 py-1 rounded-full relative z-10">
                  {item.rating}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
}

export default PopularToday;