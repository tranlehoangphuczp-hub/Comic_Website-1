import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ComicPage() {
  const { comicId } = useParams();
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/comics/${comicId}/chapters`)
      .then(res => res.json())
      .then(data => setChapters(data))
      .catch(console.error);
  }, [comicId]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Truyện {comicId}</h1>
      <p className="mb-6">Hiện mô tả truyện ở đây</p>

      <h2 className="text-xl font-semibold mb-3">Danh sách chương</h2>
      <ul className="list-disc pl-6">
        {chapters.map((ch) => (
          <li key={ch}>
            <Link
              to={`/comic/${comicId}/chapter/${ch}`}
              className="text-blue-600 hover:underline"
            >
              Chapter {ch}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
