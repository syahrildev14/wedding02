// reset-db.js
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "database.sqlite");
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  // Hapus semua data dari tabel tamu
  db.run("DELETE FROM tamu", (err) => {
    if (err) {
      console.error("Gagal hapus data:", err.message);
    } else {
      console.log("✅ Semua data tamu berhasil dihapus");
    }
  });

  // Reset autoincrement id
  db.run("DELETE FROM sqlite_sequence WHERE name='tamu'", (err) => {
    if (err) {
      console.error("Gagal reset sequence:", err.message);
    } else {
      console.log("🔄 ID sequence berhasil direset (mulai dari 1 lagi)");
    }
  });
});

db.close();
