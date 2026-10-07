import { useState, useEffect } from "react"
import brandLogo from "/jerigen.svg"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowLeft, ArrowRight, Factory, ShieldCheck, Truck } from "lucide-react"
import specImg1 from "../assets/20Liter500x500px.webp"
import specImg2 from "../assets/25Liter500x500px.webp"

const reasons = [
  { Icon: ShieldCheck, title: "Bodi tebal", desc: "HDPE virgin membantu jerigen tetap kokoh untuk pemakaian rutin." },
  { Icon: Factory, title: "Langsung dari gudang", desc: "Pesan dari Sidoarjo, lalu tanyakan stok dan ongkir sesuai tujuan." },
  { Icon: Truck, title: "Siap dibawa kerja", desc: "Ukuran, tutup, tas, dan alat kocor dipilih untuk kebutuhan lapangan." },
]

const specSlides = [
  { src: specImg1, alt: "Jerigen 20 Liter", title: "20 Liter", note: "Ukuran ringkas untuk kebutuhan harian" },
  { src: specImg2, alt: "Jerigen 25 Liter", title: "25 Liter", note: "Kapasitas lebih untuk kerja lapangan" },
]

export default function About() {
  const reduceMotion = useReducedMotion()
  const reveal = { opacity: 0, y: 24 }
  const visible = { opacity: 1, y: 0 }
  const [specIndex, setSpecIndex] = useState(0)
  const duration = 5200

  useEffect(() => {
    const timer = window.setInterval(() => setSpecIndex((i) => (i + 1) % specSlides.length), duration)
    return () => window.clearInterval(timer)
  }, [])

  const moveSpec = (dir) => setSpecIndex((i) => (i + dir + specSlides.length) % specSlides.length)

  return (
    <section id="about" className="bg-[#fcfaf5]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div
          initial={reveal}
          whileInView={visible}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mb-16 grid items-center gap-8 border-b border-[#ded7c7] pb-12 md:grid-cols-[auto_1fr] md:gap-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="grid h-32 w-32 place-items-center rounded-[1.75rem] border border-[#d8cfbe] bg-[#f1eadb] p-3 sm:h-40 sm:w-40"
          >
            <img
              src={brandLogo}
              alt="Logo Jerigen Kocor"
              className="h-full w-full object-contain"
            />
          </motion.div>
          <div className="max-w-3xl">
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-forest sm:text-4xl">
              Jerigen Kocor, teman kerja dari gudang sampai kebun.
            </h2>
            <p className="mt-4 leading-7 text-[#64665b]">
              Berawal dari kebutuhan perlengkapan kocor yang praktis untuk pekerjaan sehari-hari, Jerigen Kocor menyediakan jerigen HDPE dan perlengkapannya langsung dari Sidoarjo. Kami ingin memudahkan petani dan pedagang memilih ukuran, mengecek stok, lalu mengatur pengiriman dengan jelas.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={reveal}
          whileInView={visible}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"
        >
          <div>
            <h2 className="mt-3 max-w-md text-4xl font-black leading-tight tracking-[-0.05em] text-forest sm:text-5xl">
              Satu perlengkapan, banyak pekerjaan.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-[#64665b]">
              Untuk air, solar, bensin, minyak, dan kebutuhan lain di sekitar kebun. Kami fokus pada barang yang mudah dipahami dan mudah dipesan.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reasons.map(({ Icon, title, desc }, index) => (
              <motion.article
                key={title}
                initial={reveal}
                whileInView={visible}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="border-t-2 border-soil/70 pt-4"
              >
                <Icon size={24} className="text-leaf" />
                <h3 className="mt-6 text-xl font-black text-forest">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#64665b]">
                  {desc}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reveal}
          whileInView={visible}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="mt-16 grid items-center gap-10 rounded-[1.5rem] bg-forest p-6 text-white sm:p-8 lg:grid-cols-2 lg:p-12"
        >
          <div className="relative mx-auto w-full max-w-xs">
            <div className="relative aspect-square rounded-2xl bg-white p-6 shadow-xl">
              {specSlides.map((slide, i) => (
                <div
                  key={slide.title}
                  className={`absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-700 ${
                    i === specIndex ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={i !== specIndex}
                >
<img
                     src={slide.src}
                     alt={slide.alt}
                     className="h-full w-full object-contain"
                     width="500"
                     height="500"
                   />
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                className="flex h-10 items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 text-xs font-bold text-white transition-all hover:border-white hover:bg-white/20 active:scale-95"
                aria-label="Produk sebelumnya"
                onClick={() => moveSpec(-1)}
              >
                <ArrowLeft size={16} /> Sebelum
              </button>

              <div className="flex gap-1.5 px-1">
                {specSlides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Ke slide ${idx + 1}`}
                    onClick={() => setSpecIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === specIndex
                        ? "w-6 bg-[#e5c0a2]"
                        : "w-2.5 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="flex h-10 items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 text-xs font-bold text-white transition-all hover:border-white hover:bg-white/20 active:scale-95"
                aria-label="Produk berikutnya"
                onClick={() => moveSpec(1)}
              >
                Lanjut <ArrowRight size={16} />
              </button>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-[#e5c0a2]">
              Spesifikasi yang perlu diketahui
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">
              {specSlides[specIndex].title}
            </h3>
            <p className="mt-2 text-white/80">
              {specSlides[specIndex].note}
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border-l-2 border-soil pl-4">
                <dt className="text-xs text-[#cbd6c1]">Kapasitas</dt>
                <dd className="mt-0.5 font-bold">20L atau 25L</dd>
              </div>
              <div className="border-l-2 border-soil pl-4">
                <dt className="text-xs text-[#cbd6c1]">Material</dt>
                <dd className="mt-0.5 font-bold">HDPE Virgin</dd>
              </div>
              <div className="border-l-2 border-soil pl-4">
                <dt className="text-xs text-[#cbd6c1]">Kelengkapan</dt>
                <dd className="mt-0.5 font-bold">Stik, selang, tas, corong</dd>
              </div>
              <div className="border-l-2 border-soil pl-4">
                <dt className="text-xs text-[#cbd6c1]">Warna</dt>
                <dd className="mt-0.5 font-bold">Biru, putih</dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  )
}