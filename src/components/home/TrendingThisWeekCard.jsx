import { Link } from 'react-router-dom';

const TrendingThisWeekCard = ({ id, image, status, title, description, genre, rating, type }) => {
  return (
    <Link
      to={`/comic/${id}`}
      className="flex items-start bg-white rounded-lg shadow-md p-2 relative mb-4 cursor-pointer group transition-transform duration-200 hover:scale-[1.01]"
    >
      {/* Hình ảnh */}
      <div className="w-auto h-24 flex-shrink-0 overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Nội dung */}
      <div className="ml-4 mr-8 flex-1">
        {/* Tiêu đề */}
        <h3 className="font-bold text-base text-gray-800">{title}</h3>

        {/* Mô tả */}
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>

        {/* Type + Status + Genre */}
        <div className="flex flex-wrap gap-2 mt-2 items-center">
          {/* Type */}
          <span className="px-2 py-1 rounded text-xs font-medium bg-purple-950 text-white">
            {type}
          </span>

          {/* Status */}
          <span className="px-2 py-1 rounded text-xs font-medium bg-black text-white">
            {status}
          </span>

          {/* Genre */}
          {genre.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded text-xs font-medium bg-gray-200 text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="absolute top-3 right-3 bg-yellow-300 text-purple-950 font-bold px-2 py-1 rounded-l-full text-sm">
        {rating}
      </div>
    </Link>
  )
}

export default TrendingThisWeekCard
