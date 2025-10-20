import { useState } from "react";
import { motion } from "framer-motion";

// komponen
import Countdown from "../../components/Countdown";
import MusicPlayer from "../../components/MusicPlayer";

// images
import bg from "../../assets/images/bg.avif";
import bungaAtas from "../../assets/images/foot.avif";
import burungKanan from "../../assets/images/burung.avif";
import burungKiri from "../../assets/images/burung.avif";
import bersama from "../../assets/images/galeri/bersama.avif";
import pria from "../../assets/images/galeri/krisna.avif";
import wanita from "../../assets/images/galeri/etta.avif";
import pintu from "../../assets/images/pintu.avif";
import cincin from "../../assets/images/cincin.png";
import manok from "../../assets/images/manok.avif";
// Galeri
import galeri1 from "../../assets/images/galeri/galeri1.avif";
import galeri2 from "../../assets/images/galeri/galeri2.avif";
import galeri4 from "../../assets/images/galeri/galeri4.avif";
import galeri6 from "../../assets/images/galeri/galeri6.avif";
import galeri7 from "../../assets/images/galeri/galeri7.avif";
import galeri8 from "../../assets/images/galeri/galeri8.avif";
import galeri9 from "../../assets/images/galeri/galeri9.avif";
import galeri10 from "../../assets/images/galeri/galeri10.avif";

// icons
import { Instagram } from "lucide-react";

const Home = () => {
  const [copied, setCopied] = useState(false);

  const rekeningList = [
    { bank: "BSI", nomor: "7266029041", nama: "Krisna Mahardika" },
    {
      bank: "BRI",
      nomor: "364901042132531",
      nama: "Virnalisha Dwi Septarini",
    },
    {
      bank: "BCA",
      nomor: "1520582106",
      nama: "Heru Oktafian",
    },
  ];

  const copyToClipboard = (nomor) => {
    navigator.clipboard.writeText(nomor);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gray-200">
      {/* Musik */}
      <div className="z-999">
        <MusicPlayer />
      </div>
      {/* Frame mobile */}
      <div
        className="relative w-full sticky top-0 max-w-md min-h-screen text-lime-800 shadow-xl overflow-hidden"
        loading="lazy"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 z-0"></div>

        {/* Bunga */}
        <motion.img
          src={bungaAtas}
          loading="lazy"
          alt="Burung Kanan"
          className="absolute -top-7 w-[30rem] h-[9rem] z-20 -scale-[1]"
          initial={{ y: 200, opacity: 0 }} // mulai dari atas (tersembunyi)
          animate={{ y: 0, opacity: 1 }} // turun ke posisi normal
          transition={{ duration: 3, ease: "easeOut" }} // durasi & easing animasi
        />

        <motion.img
          src={manok}
          loading="lazy"
          alt="Burung Kanan"
          className="absolute -top-12 rotate-12 -left-6 w-[12rem] z-20"
          initial={{ y: 200, opacity: 0 }} // mulai dari atas (tersembunyi)
          animate={{ y: 0, opacity: 1 }} // turun ke posisi normal
          transition={{ duration: 3, ease: "easeOut" }} // durasi & easing animasi
        />

        <img
          src={burungKanan}
          loading="lazy"
          alt="Burung kanan"
          className="absolute bottom-0 right-0 w-[12rem] z-20 scale-x-[-1] animate-bunga"
        />
        <img
          src={burungKiri}
          loading="lazy"
          alt="Bunga kiri bawah"
          className="absolute bottom-0 left-0 w-[12rem] z-20 animate-bunga"
        />

        {/* Konten Section 1 */}
        <div className="relative z-50 flex flex-col items-center justify-center text-center min-h-screen space-y-12 px-6">
          <motion.div
            className="border-4 rounded-t-full border-lime-800 shadow-inner shadow-black"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <motion.img
              src={bersama}
              loading="lazy"
              alt="foto bersama"
              className="w-[18rem] rounded-t-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, ease: "easeOut" }}
            />
          </motion.div>
          <div className="space-y-8 text-white">
            <motion.h2
              className="text-lg tracking-widest font-semibold animate-pulse"
              initial={{ y: 50, opacity: 0 }} // mulai agak turun + transparan
              animate={{ y: 0, opacity: 1 }} // naik ke posisi normal
              transition={{ duration: 3, ease: "easeOut" }}
            >
              The Wedding of
            </motion.h2>
            <motion.h1
              className="mempelai text-6xl "
              initial={{ scale: 1.5, opacity: 0 }} // mulai besar & transparan
              animate={{ scale: 1, opacity: 1 }} // mengecil ke normal & muncul jelas
              transition={{ duration: 2, ease: "easeOut" }}
            >
              Etta & Krisna
            </motion.h1>
            <p>24 Oktober 2025</p>
          </div>
        </div>
      </div>

      {/* Section Surah */}
      <div
        className="relative  w-full max-w-md h-[20rem] text-lime-800 shadow-xl overflow-hidden"
        loading="lazy"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay transparan */}
        <div className="absolute inset-0 z-0 bg-lime-800/50"></div>

        {/* Konten */}
        <div className="relative text-white z-50 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
          <motion.h2
            className="text-xl"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            بسم الله الرحمن الرحيم
          </motion.h2>

          <motion.p
            className="text-sm"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false }}
          >
            Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda kebesaran Allah bagi kaum yang berpikir.
            <br />
          </motion.p>

          <motion.span
            className="italic text-sm"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: false }}
          >
            Surah Ar-Rum : 21
          </motion.span>
        </div>
      </div>

      {/* Mempelai Pria */}
      <div
        className="relative w-full max-w-md h-[46rem] shadow-xl overflow-hidden"
        loading="lazy"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay transparan */}
        <div className="absolute inset-0 z-0"></div>

        {/* Konten */}
        <div className="relative text-white z-50 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
          <motion.div
            className="bg-lime-800/20 py-16 border-3 border-lime-700 rounded-t-full w-full items-center justify-center flex flex-col space-y-6 z-90"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 80, // tambah damping biar lebih slow
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h1 className="mempelai text-5xl text-white">The Groom</h1>
            <motion.img
              src={pria}
              alt="pria"
              className="w-[12rem] h-[17rem] rounded-full border-2 border-white"
              initial={{ opacity: 0 }} // mulai transparan
              whileInView={{ opacity: 1 }} // jadi terlihat
              transition={{ duration: 3, ease: "easeOut" }}
              viewport={{ once: false }} // animasi hanya sekali saat muncul
            />
            <h2 className="text-2xl font-bold text-white">
              Krisna Mahardika, S.Pd
            </h2>
            <p className="text-md font-semibold">
              Putra kedua dari <br /> Bpk Damiran Edy Saputro & Ibu Supik
            </p>

            <motion.button
              className="bg-white text-lime-800 py-2 px-10 flex items-center gap-2 rounded-full shadow-sm"
              initial={{ y: 100, opacity: 0 }} // mulai agak ke kanan + transparan
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: false }}
              onClick={() =>
                window.open("https://www.instagram.com/krisnaskala/", "_blank")
              }
            >
              <Instagram size={18} />
              Instagram
            </motion.button>
          </motion.div>
        </div>
      </div>
      {/* Mempelai Wanita */}
      <div
        className="relative w-full sticky top-0 max-w-md h-[46rem] text-lime-800 shadow-xl overflow-hidden"
        loading="lazy"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay transparan */}
        <div className="absolute inset-0 z-0"></div>

        {/* Konten */}
        <div className="relative text-white z-50 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
          <motion.div
            className="bg-lime-800/20 border-3 border-lime-700 py-16 rounded-b-full w-full items-center justify-center flex flex-col space-y-6 z-90"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 80, // tambah damping biar lebih slow
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h1 className="mempelai text-5xl">The Bride</h1>
            <motion.img
              src={wanita}
              loading="lazy"
              alt="pria"
              className="w-[12rem] h-[17rem] rounded-full border-2 border-white"
              initial={{ opacity: 0 }} // mulai transparan
              whileInView={{ opacity: 1 }} // jadi terlihat
              transition={{ duration: 3, ease: "easeOut" }}
              viewport={{ once: false }} // animasi hanya sekali saat muncul
            />
            <h2 className="text-2xl font-bold">
              Virnalisha Dwi Septarini, S.Pd
            </h2>
            <p className="text-md font-semibold">
              Putri kedua dari <br /> Bpk Ponijan (Alm.) & Ibu Sumik Widayati
            </p>

            <motion.button
              className="bg-white text-lime-800 py-2 px-10 flex items-center gap-2 rounded-full shadow-sm"
              initial={{ y: 100, opacity: 0 }} // mulai agak ke kanan + transparan
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: false }}
              onClick={() =>
                window.open("https://www.instagram.com/etta_eswe/", "_blank")
              }
            >
              <Instagram size={18} />
              Instagram
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Jadwal */}
      <div
        className="relative w-full max-w-md min-h-screen bg-fixed bg-center bg-cover text-lime-800 shadow-xl overflow-hidden"
        loading="lazy"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 z-0 "></div>

        {/* Bunga */}
        <motion.img
          src={pintu}
          loading="lazy"
          alt="Pintu"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[58rem] w-[35rem] max-w-none z-20"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 80, // tambah damping biar lebih slow
          }}
          viewport={{ once: false, amount: 0.5 }}
        />

        <img
          src={burungKanan}
          loading="lazy"
          alt="Burung kanan"
          className="absolute bottom-0 -right-8 w-[14rem] z-20 scale-x-[-1] animate-bunga"
        />
        <img
          src={burungKiri}
          loading="lazy"
          alt="Bunga kiri bawah"
          className="absolute bottom-0 -left-8 w-[14rem] z-20 animate-bunga"
        />

        {/* Konten Section 1 */}
        <div className="relative z-50 flex flex-col items-center justify-center text-center min-h-screen space-y-6 px-6">
          <img
            src={cincin}
            alt="cincin"
            loading="lazy"
            className=" w-24 mx-auto "
          />
          {/*Jadwal Akad */}
          <div className="space-y-4 text-white">
            <motion.h1
              className="mempelai text-6xl"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 80, // tambah damping biar lebih slow
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Akad Nikah
            </motion.h1>
            <motion.p
              className="font-semibold text-xl"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 80, // tambah damping biar lebih slow
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Jum'at, 24 Oktober 2025 <br />
              Pukul 08.00 WIB
            </motion.p>
          </div>

          {/* Jadwal Resepsionis */}
          <div className="space-y-4 text-white">
            <motion.h1
              className="mempelai text-6xl"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 80, // tambah damping biar lebih slow
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Resepsi
            </motion.h1>
            <motion.p
              className="font-semibold text-xl"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 80, // tambah damping biar lebih slow
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Sabtu, 25 Oktober 2025 <br />
              (Kediaman Mempelai Wanita)
            </motion.p>
            <motion.p
              className="font-light"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 80, // tambah damping biar lebih slow
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Dsn. Barmanik 003/002 <br /> Ds. Jantiganggong, Perak-Jombang
            </motion.p>
            <motion.button
              className="py-2 px-4 text-lime-800 w-28 text-sm shadow-sm font-semibold bg-white rounded-full"
              initial={{ y: 100, opacity: 0 }} // mulai agak ke kanan + transparan
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: false }}
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/7%C2%B036'05.9%22S+112%C2%B010'07.3%22E/@-7.6016248,112.166116,718m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-7.6016248!4d112.1686909?hl=id&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D",
                  "_blank"
                )
              }
            >
              Maps
            </motion.button>

            <motion.p
              className="font-semibold text-xl"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 80, // tambah damping biar lebih slow
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Minggu, 26 Oktober 2025 <br />
              (Kediaman Mempelai Pria)
            </motion.p>
            <motion.p
              className="font-light"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 80, // tambah damping biar lebih slow
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Dsn. Godong II, RT/RW: 001/002, <br />
              Ds. Godong, Kec. Gudo, Kab. Jombang
            </motion.p>

            <motion.button
              className="py-2 px-4 text-lime-800 w-28 text-sm shadow-sm font-semibold bg-white rounded-full"
              initial={{ y: 100, opacity: 0 }} // mulai agak ke kanan + transparan
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: false }}
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/7%C2%B035'48.0%22S+112%C2%B011'41.5%22E/@-7.5966674,112.192274,718m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-7.5966674!4d112.1948489?hl=id&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D",
                  "_blank"
                )
              }
            >
              Maps
            </motion.button>
          </div>
        </div>
      </div>

      {/* Countdown & Gallery */}
      <div
        className="relative w-full max-w-md min-h-screen py-20 text-lime-800 shadow-xl overflow-hidden"
        loading="lazy"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay transparan */}
        <div className="absolute inset-0 z-0"></div>

        {/* Countdown */}
        <div className="relative text-white z-50 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
          <motion.h2
            className="text-4xl mempelai"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 80, // tambah damping biar lebih slow
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Save The Date
          </motion.h2>
          <Countdown targetDate="2025-10-24T00:00:00" />
          <motion.p
            className="italic text-sm px-10"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 80, // tambah damping biar lebih slow
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Merupakan suatu kehormatan dan kebahagiaan apabila
            Bapak/Ibu/Saudara/i berkenan memberikan Do'a restu kepada Kami.{" "}
            <br /> Atas kehadiran dan Doa'a restunya <br /> Kami ucapkan
            terimakasih
          </motion.p>

          {/* Gallery */}
          <section className="mt-12">
            <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4">
              <motion.img
                src={galeri1}
                loading="lazy"
                alt="Foto A"
                className="w-full rounded-lg shadow-lg"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 80, // tambah damping biar lebih slow
                }}
                viewport={{ once: false, amount: 0.5 }}
              />
              <motion.img
                src={galeri2}
                loading="lazy"
                alt="Foto B"
                className="w-full rounded-lg shadow-lg"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 80, // tambah damping biar lebih slow
                }}
                viewport={{ once: false, amount: 0.5 }}
              />

              <motion.img
                src={galeri4}
                loading="lazy"
                alt="Foto A"
                className="w-full rounded-lg shadow-lg"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 80, // tambah damping biar lebih slow
                }}
                viewport={{ once: false, amount: 0.5 }}
              />

              <motion.img
                src={galeri6}
                loading="lazy"
                alt="Foto C"
                className="w-full rounded-lg shadow-lg"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 80, // tambah damping biar lebih slow
                }}
                viewport={{ once: false, amount: 0.5 }}
              />
              <motion.img
                src={galeri7}
                loading="lazy"
                alt="Foto C"
                className="w-full rounded-lg shadow-lg"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 80, // tambah damping biar lebih slow
                }}
                viewport={{ once: false, amount: 0.5 }}
              />
              <motion.img
                src={galeri8}
                loading="lazy"
                alt="Foto C"
                className="w-full rounded-lg shadow-lg"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 80, // tambah damping biar lebih slow
                }}
                viewport={{ once: false, amount: 0.5 }}
              />
              <motion.img
                src={galeri9}
                loading="lazy"
                alt="Foto C"
                className="w-full rounded-lg shadow-lg"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 80, // tambah damping biar lebih slow
                }}
                viewport={{ once: false, amount: 0.5 }}
              />
              <motion.img
                src={galeri10}
                loading="lazy"
                alt="Foto C"
                className="w-full rounded-lg shadow-lg"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 80, // tambah damping biar lebih slow
                }}
                viewport={{ once: false, amount: 0.5 }}
              />
            </div>
          </section>
        </div>
      </div>

      {/* Rekening */}
      <div
        className="relative w-full max-w-md h-[44rem] py-20 text-lime-800 shadow-xl overflow-hidden"
        loading="lazy"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay transparan */}
        <div className="absolute inset-0 z-0 "></div>
        <div className="relative text-white z-50 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
          <motion.h2
            className="text-4xl mempelai mb-12"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 80, // tambah damping biar lebih slow
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Rekening Hadiah
          </motion.h2>
          <section className="py-8 bg-lime-800/60 w-full rounded-3xl">
            <div className="max-w-lg mx-auto text-center px-6">
              <div className="space-y-6">
                {rekeningList.map((rek, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 80, // tambah damping biar lebih slow
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    <p className="text-lg font-semibold text-lime-800">
                      {rek.bank}
                    </p>
                    <p className="text-2xl font-bold tracking-wider mt-2 text-lime-800">
                      {rek.nomor}
                    </p>
                    <p className="text-md text-lime-800 mt-1 font-semibold">
                      a.n {rek.nama}
                    </p>

                    <button
                      onClick={() => copyToClipboard(rek.nomor)}
                      className="mt-4 px-4 py-2 bg-lime-800 text-white rounded-lg hover:bg-lime-700 transition"
                    >
                      {copied ? "✅ Tersalin" : "📋 Salin Nomor"}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Penutup */}
      <div
        className="relative w-full max-w-md h-[34rem] text-lime-800 shadow-xl overflow-hidden"
        loading="lazy"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 z-0 "></div>

        <img
          src={burungKanan}
          loading="lazy"
          alt="Burung kanan"
          className="absolute bottom-0 -right-8 w-[12rem] z-20 scale-x-[-1] animate-bunga"
        />
        <img
          src={burungKiri}
          loading="lazy"
          alt="Bunga kiri bawah"
          className="absolute bottom-0 -left-8 w-[12rem] z-20 animate-bunga"
        />

        {/* Konten Section 1 */}
        <div className="relative z-50 flex flex-col items-center justify-center text-center h-full space-y-12 px-6">
          <div className="space-y-8 text-white">
            <motion.img
              src={bersama}
              loading="lazy"
              alt="foto bersama"
              className="w-[10rem] mx-auto rounded-full border-2 border-white"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 80, // tambah damping biar lebih slow
              }}
              viewport={{ once: false, amount: 0.5 }}
            />
            <p className="font-semibold text-sm italic">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
              Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu
              kepada kedua mempelai. <br /> Hormat Kami Yang Mengundang
            </p>
            <p>Hormat Kami :</p>
            <motion.h1
              className="text-md"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 80, // tambah damping biar lebih slow
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Bpk Ponijan (Alm.) & Bu Sumik Widayati <br />Heru Oktafian &
              Vita Fauzi Maymunah
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
