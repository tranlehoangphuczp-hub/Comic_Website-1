import React from 'react';
import ComicCard from '../common/ComicCard';

const RecentlyUpdates = () => {
  const recentComics = [
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
      timeAgo: '2 min ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Crime', 'Drama', 'School Life'],
      rating: '9.2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 588',
      isHot: true,
      timeAgo: '2 min ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Crime', 'Drama', 'School Life'],
      rating: '9.2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 4,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 1095',
      isHot: false,
      timeAgo: '2 min ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Crime', 'Drama', 'School Life'],
      rating: '9.2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 5,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 139',
      isHot: true,
      timeAgo: '2 min ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Crime', 'Drama', 'School Life'],
      rating: '9.2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 6,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 205',
      isHot: false,
      timeAgo: '2 min ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Crime', 'Drama', 'School Life'],
      rating: '9.2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 7,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 237',
      isHot: true,
      timeAgo: '2 min ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Crime', 'Drama', 'School Life'],
      rating: '9.2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 8,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 147',
      isHot: false,
      timeAgo: '2 min ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Crime', 'Drama', 'School Life'],
      rating: '9.2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 9,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 405',
      isHot: true,
      timeAgo: '2 min ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Crime', 'Drama', 'School Life'],
      rating: '9.2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 10,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 370',
      isHot: false,
      timeAgo: '2 min ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Crime', 'Drama', 'School Life'],
      rating: '9.2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 11,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 700',
      isHot: false,
      timeAgo: '2 min ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Crime', 'Drama', 'School Life'],
      rating: '9.2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 12,
      imageUrl: '/banners/trending.jpg',
      title: 'Comic Name',
      chapter: 'Chapter 98',
      isHot: true,
      timeAgo: '2 min ago',
      author: 'Author Name',
      status: 'Ongoing',
      genres: ['Action', 'Crime', 'Drama', 'School Life'],
      rating: '9.2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  const handleComicClick = (comic) => {
    console.log('Clicked comic:', comic.title);
    // Thêm logic điều hướng tại đây
  };

  return (
    <div>
      <h2 className="text-sm font-bold rounded mb-6 text-yellow-300 bg-purple-950 px-4 py-2">
        Recently Updates
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {recentComics.map((comic) => (
          <ComicCard
            key={comic.id}
            imageUrl={comic.imageUrl}
            title={comic.title}
            chapter={comic.chapter}
            timeAgo={comic.timeAgo}
            author={comic.author}
            status={comic.status}
            genres={comic.genres}
            rating={comic.rating}
            description={comic.description}
            onClick={() => handleComicClick(comic)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentlyUpdates;