import { useEffect, useState } from "react"
import { Link } from "react-scroll"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDownRight, ArrowLeft, ArrowRight, MessageCircle, Sprout } from "lucide-react"
import heroImg1 from "../assets/20_liter.png"
import heroImg2 from "../assets/25_liter.png"
import heroImg3 from "../assets/alat.png"

const slides = [
  { src: heroImg1, alt: "Jerigen kocor 20 liter", title: "20 Liter", note: "Ringkas untuk kebutuhan harian" },
  { src: heroImg2, alt: "Jerigen kocor 25 liter", title: "25 Liter", note: "Kapasitas lebih untuk kerja lapangan" },
  { src: heroImg3, alt: "Perlengkapan alat kocor", title: "Perlengkapan kocor", note: "Selang, stik, corong, dan saringan" },
]
const duration = 5200

export default function Home() {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % slides.length), duration)
    return () => window.clearInterval(timer)
  }, [])

  const move = (direction) => setIndex((value) => (value + direction + slides.length) % slides.length)

  return (
    <motion.section id="home" initial={reduceMotion ? false : { opacity: 0 }} animate={reduceMotion ? undefined : { opacity: 1 }} transition={{ duration: 0.7 }} className="relative isolate overflow-hidden border-b border-[#ded7c7] bg-[#e8dfcb]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(184,104,60,0.25),transparent_32%),linear-gradient(120deg,#f5f0e4_0%,#e8dfcb_52%,#d6c6a9_100%)]" />
      <div className="absolute -right-24 top-20 -z-10 h-72 w-72 rounded-full border-[28px] border-white/25 sm:h-96 sm:w-96" />
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
        <motion.div className="max-w-xl" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
          <p className="mb-5 flex items-center gap-2 text-sm font-bold text-leaf"><Sprout size={18} /> Perlengkapan kerja petani dari Sidoarjo</p>
          <h1 className="max-w-2xl text-5xl font-black leading-[0.98] tracking-[-0.06em] text-forest sm:text-6xl lg:text-7xl">Jerigen kocor yang siap ikut ke kebun.</h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-[#56584d] sm:text-lg">Bodi HDPE tebal, tutup ulir rapat, dan perlengkapan kocor yang dibuat untuk kerja harian. Pilih ukuran, cek kebutuhan, lalu pesan langsung dari gudang.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="https://wa.me/628814394119?text=Halo%20Jerigen%20Kocor%2C%20saya%20mau%20tanya%20harga%20dan%20stok" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-forest px-5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-leaf"><MessageCircle size={18} /> Tanya stok dan harga</a>
            <Link to="pricing" smooth duration={650} offset={-72} className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border border-forest/25 bg-white px-5 text-sm font-bold text-forest transition-colors hover:bg-[#f1eadb]">Lihat produk <ArrowDownRight size={17} /></Link>
          </div>
          <div className="mt-10 grid max-w-lg grid-cols-2 gap-5 border-t border-forest/15 pt-5 sm:grid-cols-3">
            <div><strong className="block text-lg font-black text-forest">HDPE virgin</strong><span className="text-sm text-[#656659]">Material utama</span></div>
            <div><strong className="block text-lg font-black text-forest">20L / 25L</strong><span className="text-sm text-[#656659]">Pilihan kapasitas</span></div>
            <div className="col-span-2 sm:col-span-1"><strong className="block text-lg font-black text-forest">Kirim Jawa</strong><span className="text-sm text-[#656659]">Dari gudang Sidoarjo</span></div>
          </div>
        </motion.div>

        <motion.div className="relative mx-auto w-full max-w-[590px] lg:justify-self-end" initial={reduceMotion ? false : { opacity: 0, x: 20 }} animate={reduceMotion ? undefined : { opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/65 bg-[#f8f4e9]/85 p-4 shadow-[0_22px_50px_rgba(73,62,36,0.18)] sm:p-6">
            {slides.map((slide, slideIndex) => (
              <div key={slide.title} className={`absolute inset-0 flex items-center justify-center p-8 transition-all duration-700 sm:p-12 ${slideIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-0"}`} aria-hidden={slideIndex !== index}>
                <img src={slide.src} alt={slide.alt} className="h-full w-full object-contain mix-blend-multiply" />
              </div>
            ))}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 sm:bottom-6 sm:left-6 sm:right-6">
              <div className="max-w-[70%] rounded-xl bg-forest px-4 py-3 text-white shadow-lg"><p className="text-xs font-semibold text-[#d9e2c9]">Produk pilihan</p><p className="mt-1 text-lg font-black">{slides[index].title}</p><p className="text-xs text-[#d9e2c9]">{slides[index].note}</p></div>
              <div className="flex gap-2">
                <button type="button" className="grid h-11 w-11 place-items-center rounded-xl border border-white/80 bg-white/90 text-forest" aria-label="Produk sebelumnya" onClick={() => move(-1)}><ArrowLeft size={18} /></button>
                <button type="button" className="grid h-11 w-11 place-items-center rounded-xl border border-white/80 bg-white/90 text-forest" aria-label="Produk berikutnya" onClick={() => move(1)}><ArrowRight size={18} /></button>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end px-1"><span className="text-xs font-semibold text-forest/70">Berpindah otomatis</span></div>
          <div className="mt-4 rounded-xl border border-forest/15 bg-white/40 px-4 py-3 text-sm font-semibold text-forest">Foto produk asli, pilihan baru menyusul sesuai kebutuhan kebun.</div>
        </motion.div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 pb-7 text-sm font-semibold text-forest sm:px-8 lg:px-10"><span className="h-2 w-2 rounded-full bg-soil" /> Pengiriman dan ongkir dibantu lewat WhatsApp</div>
    </motion.section>
  )
}
