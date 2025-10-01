import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

// images
import bg from "../../assets/images/bg.avif";
import head from "../../assets/images/head.avif";
import gunung from "../../assets/images/gunung.avif";
import foot from "../../assets/images/foot.avif";
import { motion } from "framer-motion";

export default function Undangan() {
  // const [opened, setOpened] = useState(false);
  const { slug } = useParams();
  const [tamu, setTamu] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/tamu/${slug}`)
      .then((res) => setTamu(res.data))
      .catch(() => setTamu(null));
  }, [slug]);

  if (!tamu) return <h2>Tamu tidak ditemukan</h2>;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-200">
      {/* Frame mobile */}
      <div
        className="relative w-full max-w-md min-h-screen text-lime-800  shadow-xl flex items-center justify-center overflow-hidden"
        loading="lazy"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 z-0"></div>

        {/* Konten */}
        <div className="relative z-90 flex flex-col items-center justify-center text-center space-y-12 px-6">
          <div className="space-y-4">
            <img src={head} alt="head" loading="lazy" className="w-[14rem]" />
            <h2 className="text-lg  tracking-widest font-bold">
              The Wedding Of
            </h2>
          </div>
          <img src={gunung} alt="gunungan" loading="lazy" className="w-[18rem]" />
          <h1 className="mempelai text-5xl font-bold mt-2 ">Etta & Krisna</h1>

          <div>
            <span className="font-semibold">
              Kepada Yth; <br /> Bapak/Ibu/Saudara/i
            </span>
            <h1 className="mt-2 text-2xl font-bold">{tamu.nama}</h1>
          </div>

          <Link
            to={`/${tamu.slug}/home`}
            className="mt-6 bg-lime-800 text-white text-sm px-6 py-3 rounded-full shadow-lg font-semibold animate-pulse"
          >
            Open Invitation
          </Link>
          <img src={foot} alt="foot" loading="lazy" className="absolute -bottom-20 w-[30rem] max-w-none" />
        </div>
      </div>
    </div>
  );
}
