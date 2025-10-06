import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const app = express();
app.use(cors());

Kết nối MySQL
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "comicsdb",
});

// Lấy danh sách chapter của truyện
app.get("/api/comics/:comicId/chapters", async (req, res) => {
  const { comicId } = req.params;

  try {
    const [rows] = await db.execute(
      "SELECT chapter_number FROM chapters WHERE comic_id = ? ORDER BY chapter_number ASC",
      [comicId]
    );
    const chapters = rows.map(row => row.chapter_number);
    res.json(chapters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi khi lấy danh sách chương" });
  }
});

//  Lấy ảnh trong 1 chapter
app.get("/api/comics/:comicId/chapters/:chapterId", async (req, res) => {
  const { comicId, chapterId } = req.params;

  try {
    const [chapterRows] = await db.execute(
      "SELECT id FROM chapters WHERE comic_id=? AND chapter_number=?",
      [comicId, chapterId]
    );

    if (chapterRows.length === 0)
      return res.status(404).json({ error: "Không tìm thấy chapter" });

    const chapterIdDb = chapterRows[0].id;

    const [imageRows] = await db.execute(
      "SELECT image_url FROM chapter_images WHERE chapter_id=?",
      [chapterIdDb]
    );

    res.json({ images: imageRows.map(r => r.image_url) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi server" });
  }
});

// Khởi động server
app.listen(3000, () => console.log("✅ Backend chạy tại http://localhost:3000"));
