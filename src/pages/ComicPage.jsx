import { useState } from 'react';
import { Link } from 'react-router-dom';

const ComicPage = () => {
    // Mock data cho comic
    const comic = {
        id: 1,
        title: "Comic Name",
        coverImage: "/banners/trending.jpg",
        author: "Author Name",
        status: "Ongoing",
        genre: ["Action", "Adventure", "Comedy"],
        rating: 4.8,
        totalChapters: 1095,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lastUpdated: "2 hours ago"
    };

    // Mock chapters data
    const chapters = [
        { id: 1095, title: "Chapter 1095: New World", releaseDate: "2024-10-01" },
        { id: 1094, title: "Chapter 1094: Adventure Begins", releaseDate: "2024-09-25" },
        { id: 1093, title: "Chapter 1093: The Journey", releaseDate: "2024-09-18" },
        { id: 1092, title: "Chapter 1092: Pirates", releaseDate: "2024-09-11" },
        { id: 1091, title: "Chapter 1091: Grand Line", releaseDate: "2024-09-04" }
    ];

    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollow = () => {
        setIsFollowing(!isFollowing);
        alert(isFollowing ? 'Unfollowed comic!' : 'Following comic!');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Comic Info Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Cover Image */}
                        <div className="flex-shrink-0">
                            <img
                                src={comic.coverImage}
                                alt={comic.title}
                                className="w-full md:w-64 h-96 object-cover rounded-lg shadow-md"
                            />
                        </div>

                        {/* Comic Details */}
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-purple-950 mb-2">
                                {comic.title}
                            </h1>

                            <div className="space-y-2 mb-4">
                                <p><span className="font-medium text-gray-700">Author:</span> {comic.author}</p>
                                <p><span className="font-medium text-gray-700">Status:</span>
                                    <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-sm rounded">
                                        {comic.status}
                                    </span>
                                </p>
                                <p><span className="font-medium text-gray-700">Rating:</span>
                                    <span className="ml-2 text-yellow-500">★ {comic.rating}/5</span>
                                </p>
                                <p><span className="font-medium text-gray-700">Chapters:</span> {comic.totalChapters}</p>
                                <p><span className="font-medium text-gray-700">Last Updated:</span> {comic.lastUpdated}</p>
                            </div>

                            {/* Genres */}
                            <div className="mb-4">
                                <span className="font-medium text-gray-700">Genres: </span>
                                <div className="inline-flex flex-wrap gap-1 mt-1">
                                    {comic.genre.map(genre => (
                                        <span
                                            key={genre}
                                            className="px-2 py-1 bg-purple-100 text-purple-800 text-sm rounded"
                                        >
                                            {genre}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-4">
                                <h3 className="font-medium text-gray-700 mb-2">Description:</h3>
                                <p className="text-gray-600 leading-relaxed">{comic.description}</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3">
                                <button
                                    onClick={handleFollow}
                                    className={`px-4 py-2 rounded-md font-medium transition-colors ${isFollowing
                                        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        : 'bg-purple-950 text-white hover:bg-purple-900'
                                        }`}
                                >
                                    {isFollowing ? 'Following' : 'Follow'}
                                </button>

                                <Link
                                    to={`/comic/${comic.id}/chapter/${chapters[0]?.id}`}
                                    className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 font-medium transition-colors"
                                >
                                    Read Latest
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chapters List */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold text-purple-950 mb-4">Chapters</h2>

                    <div className="space-y-2">
                        {chapters.map(chapter => (
                            <div
                                key={chapter.id}
                                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg border border-gray-100 transition-colors"
                            >
                                <div className="flex-1">
                                    <Link
                                        to={`/comic/${comic.id}/chapter/${chapter.id}`}
                                        className="text-purple-950 hover:text-purple-700 font-medium"
                                    >
                                        {chapter.title}
                                    </Link>
                                </div>
                                <div className="text-sm text-gray-500">
                                    {chapter.releaseDate}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="mt-4 text-center">
                        <button className="px-4 py-2 text-purple-950 border border-purple-950 rounded-md hover:bg-purple-50 transition-colors">
                            Load More Chapters
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComicPage;
