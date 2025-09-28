const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database setup
const dbPath = path.resolve(__dirname, "database.sqlite");
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tamu (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nama TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL
    )
  `);
});

// =======================
// API Routes
// =======================

// Daftar tamu
app.get("/api/tamu", (req, res) => {
  db.all("SELECT * FROM tamu", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Tamu by slug
app.get("/api/tamu/:slug", (req, res) => {
  db.get("SELECT * FROM tamu WHERE slug = ?", [req.params.slug], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: "Tamu tidak ditemukan" });
    res.json(row);
  });
});

// Tambah tamu
app.post("/api/tamu", (req, res) => {
  const { nama } = req.body;
  if (!nama) return res.status(400).json({ message: "Nama wajib diisi" });

  const slug = nama.toLowerCase().replace(/\s+/g, "-");
  db.run(
    "INSERT INTO tamu (nama, slug) VALUES (?, ?)",
    [nama, slug],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({
        id: this.lastID,
        nama,
        slug,
        link: `/${slug}`, // ✅ perbaikan
      });
    }
  );
});

// =======================
// Serve React build
// =======================
const frontendPath = path.join(__dirname, "frontend", "dist");
app.use(express.static(frontendPath));

// Fallback ke React Router (kecuali /api)
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// =======================
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`); // ✅ perbaikan
});
