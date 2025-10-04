import React from 'react';
import ComicCard from '../common/ComicCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const LatestReleases = () => {
  const comics = [
    {
      id: 1,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 17',
      isHot: true,
      timeAgo: '2 min ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Crime', 'Drama', 'School Life'],
      rating: '9.2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 179',
      isHot: false,
      timeAgo: '15 min ago',
      author: 'Author Name',
      status: 'Completed',
      genres: ['Action', 'Adventure', 'Fantasy', 'Supernatural'],
      rating: '9.8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 588',
      isHot: true,
      timeAgo: '30 min ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Adventure', 'Drama', 'Fantasy', 'Mystery'],
      rating: '9.1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 4,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 1095',
      isHot: false,
      timeAgo: '1 hour ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Adventure', 'Comedy', 'Shounen'],
      rating: '9.6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 5,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 1095',
      isHot: false,
      timeAgo: '1 hour ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Adventure', 'Comedy', 'Shounen'],
      rating: '9.6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 6,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 1095',
      isHot: false,
      timeAgo: '1 hour ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Adventure', 'Comedy', 'Shounen'],
      rating: '9.6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 7,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 1095',
      isHot: false,
      timeAgo: '1 hour ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Adventure', 'Comedy', 'Shounen'],
      rating: '9.6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 8,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 1095',
      isHot: false,
      timeAgo: '1 hour ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Adventure', 'Comedy', 'Shounen'],
      rating: '9.6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 9,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 1095',
      isHot: false,
      timeAgo: '1 hour ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Adventure', 'Comedy', 'Shounen'],
      rating: '9.6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 10,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 1095',
      isHot: false,
      timeAgo: '1 hour ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Adventure', 'Comedy', 'Shounen'],
      rating: '9.6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 11,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 1095',
      isHot: false,
      timeAgo: '1 hour ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Adventure', 'Comedy', 'Shounen'],
      rating: '9.6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 12,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 1095',
      isHot: false,
      timeAgo: '1 hour ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Adventure', 'Comedy', 'Shounen'],
      rating: '9.6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ];

  const handleComicClick = (comic) => {
    console.log('Clicked comic:', comic.title);
    // Thêm logic điều hướng tại đây
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-purple-950">
        Latest Releases
      </h2>

      <div className="relative overflow-hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={2}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 28,
            },
          }}
          className="!pb-8 !overflow-visible"
        >
          {comics.map((comic) => (
            <SwiperSlide key={comic.id} className="!overflow-visible">
              <ComicCard
                imageUrl={comic.imageUrl}
                title={comic.title}
                chapter={comic.chapter}
                timeAgo={comic.timeAgo}
                author={comic.author}
                status={comic.status}
                genres={comic.genres}
                rating={comic.rating}
                description={comic.description}
                comicId={comic.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-purple-950/80 backdrop-blur-sm rounded-full flex items-center justify-center text-yellow-300 hover:bg-yellow-300/90 hover:text-purple-950 transition-all duration-300 shadow-xl hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-purple-950/80 backdrop-blur-sm rounded-full flex items-center justify-center text-yellow-300 hover:bg-yellow-300/90 hover:text-purple-950 transition-all duration-300 shadow-xl hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LatestReleases;