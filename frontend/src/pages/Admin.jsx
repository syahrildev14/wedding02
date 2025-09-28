import { useState, useEffect } from "react";
import axios from "axios";

export default function Admin() {
  const [nama, setNama] = useState("");
  const [tamu, setTamu] = useState([]);

  const fetchTamu = async () => {
    const res = await axios.get("/api/tamu");
    setTamu(res.data);
  };

  const tambahTamu = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/tamu", { nama });
    alert("Tamu ditambahkan: " + res.data.link);
    setNama("");
    fetchTamu();
  };

  useEffect(() => {
    fetchTamu();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-100 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl min-h-screen shadow-lg p-6">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Tamu Undangan
        </h1>
        <p className="text-center text-sm">Silahkan input nama tamu undangan untuk mendapatkan link</p>
        </div>

        <form onSubmit={tambahTamu} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Nama tamu"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-lime-600 hover:lime-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Tambah
          </button>
        </form>

        <h2 className="text-lg font-semibold mt-6 mb-3 text-gray-700">
          Daftar Tamu
        </h2>
        <ul className="space-y-2 max-h-60 overflow-y-auto">
          {tamu.map((t) => (
            <li
              key={t.id}
              className="flex justify-between items-center px-3 py-2 "
            >
              <span className="text-gray-800">{t.nama}</span>
              <a
                href={`/${t.slug}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                Lihat
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
