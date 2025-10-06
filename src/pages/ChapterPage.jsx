import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ChapterPage() {
  const { comicId, chapterId } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/comics/${comicId}/chapters/${chapterId}`)
      .then(res => res.json())
      .then(data => {
        setImages(data.images || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [comicId, chapterId]);

  if (loading) return <p>⏳ Đang tải...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Chapter {chapterId}</h1>
      {images.length === 0 ? (
        <p className="text-gray-500">Chưa có nội dung cho chapter này.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {images.map((img, i) => (
            <img key={i} src={img} alt={`Page ${i + 1}`} className="rounded-lg shadow" />
          ))}
        </div>
      )}

      <div className="flex justify-between mt-6">
        <a
          href={`/comic/${comicId}/chapter/${parseInt(chapterId) - 1}`}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ◀ Previous
        </a>
        <a
          href={`/comic/${comicId}/chapter/${parseInt(chapterId) + 1}`}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next ▶
        </a>
      </div>
    </div>
  );
}
