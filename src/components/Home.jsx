import { useEffect, useState } from "react"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { ArrowDownRight, MessageCircle, Sprout } from "lucide-react"
import bg1 from "../assets/bg1.webp"

const bgImages = [
  bg1,
]

const duration = 6000

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setBgIndex((i) => (i + 1) % bgImages.length), duration)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative isolate overflow-hidden border-b border-[#ded7c7]"
    >
      <div className="absolute inset-0 -z-20">
        {bgImages.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === bgIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== bgIndex}
          >
            <img src={src} alt="Background jerigen kocor" className="h-full w-full scale-105 object-cover" fetchpriority="high" loading="eager" width="1920" height="1080" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/55" />
          </div>
        ))}
      </div>

      <div
        className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center gap-10 px-5 py-20 text-center sm:px-8 lg:py-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Jerigen kocor siap ikut ke kebun
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
            Bodi HDPE tebal, tutup ulir rapat, dan perlengkapan kocor yang dibuat untuk kerja harian. Pilih ukuran, cek kebutuhan, lalu pesan langsung dari gudang.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/628814394119?text=Halo%20Jerigen%20Kocor%2C%20saya%20mau%20tanya%20harga%20dan%20stok"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full sm:w-56 items-center justify-center gap-2 rounded-xl bg-forest px-6 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-leaf"
            >
              <MessageCircle size={18} /> Tanya stok
            </a>
            <Link
              to="pricing"
              href="#pricing"
              smooth
              duration={650}
              offset={-72}
              className="inline-flex min-h-12 w-full sm:w-56 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/80 bg-white/10 backdrop-blur-sm px-6 text-sm font-bold text-white transition-colors hover:bg-white/20"
            >
              Lihat produk <ArrowDownRight size={17} />
            </Link>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/20 pt-6">
            <div className="text-center">
              <strong className="block text-lg font-black text-white">HDPE virgin</strong>
              <span className="text-sm text-white/70">Material utama</span>
            </div>
            <div className="text-center">
              <strong className="block text-lg font-black text-white">20L / 25L</strong>
              <span className="text-sm text-white/70">Pilihan kapasitas</span>
            </div>
            <div className="text-center">
              <strong className="block text-lg font-black text-white">Kirim Jawa</strong>
              <span className="text-sm text-white/70">Dari gudang Sidoarjo</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 lg:px-10"
      >
        <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-5 sm:px-8 sm:py-6">
            <span className="block text-center text-xs font-bold uppercase tracking-widest text-[#e5c0a2]">Dipercaya UMKM alat pertanian se-Jawa Timur</span>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm font-extrabold tracking-wide text-white/90">
            <span>TOKO TANI JAYA</span>
            <span className="text-white/30">•</span>
            <span>TOKO TANI SEJATERAH</span>
            <span className="text-white/30">•</span>
            <span>SUMBER MAKMUR</span>
            <span className="text-white/30">•</span>
            <span>TANI SUMBER ABADI</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}