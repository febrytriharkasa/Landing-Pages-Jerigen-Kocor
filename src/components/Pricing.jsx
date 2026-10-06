import { motion, useReducedMotion } from "framer-motion"
import { Check, MessageCircle, Package } from "lucide-react"
import heroImg20Liter from "../assets/20Liter500x500px.png"
import heroImg25Liter from "../assets/25Liter500x500px.png"

const products = [
  { img: heroImg20Liter, alt: "Jerigen kocor 20 liter", title: "20 Liter", sub: "Ukuran ringkas untuk kebutuhan harian", price: "Rp 550.000", features: ["Kapasitas 20 liter", "HDPE virgin", "Tutup kocor ulir rapat", "Tas gendongan kuat"], wa: "Mau pesan Jerigen 20L - 1 ikat (5 pcs)" },
  { img: heroImg25Liter, alt: "Jerigen kocor 25 liter", title: "25 Liter", sub: "Ruang lebih untuk kerja lapangan", price: "Rp 650.000", features: ["Kapasitas 25 liter", "HDPE virgin", "Tutup kocor ulir rapat", "Tas gendongan kuat"], wa: "Mau pesan Jerigen 25L - 1 ikat (5 pcs)" },
]

export default function Pricing() {
  const reduceMotion = useReducedMotion()
  const reveal = reduceMotion ? false : { opacity: 0, y: 24 }
  const visible = reduceMotion ? undefined : { opacity: 1, y: 0 }

  return (
    <section id="pricing" className="border-y border-[#ded7c7] bg-[#f1eadb]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div initial={reveal} whileInView={visible} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="flex flex-col justify-between gap-6 border-b border-forest/15 pb-8 lg:flex-row lg:items-end"><div><p className="text-sm font-bold text-soil">Produk utama</p><h2 className="mt-3 max-w-xl text-4xl font-black tracking-[-0.05em] text-forest sm:text-5xl">Lihat ukuran sebelum pesan.</h2></div><p className="max-w-sm text-sm leading-6 text-[#64665b]">Harga di bawah untuk satu ikat, isi lima pcs. Chat untuk cek stok, warna, ongkir, dan kebutuhan jumlah besar.</p></motion.div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">{products.map((product, index) => <motion.article key={product.title} initial={reveal} whileInView={visible} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: index * 0.12 }} className="grid overflow-hidden rounded-[1.5rem] border border-[#d8cfbe] bg-[#fcfaf5] md:grid-cols-[0.9fr_1.1fr]"><div className="flex min-h-72 items-center justify-center bg-[#e7dfcf] p-6"><img src={product.img} alt={product.alt} className="h-64 w-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105" loading="lazy" /></div><div className="flex flex-col p-6 sm:p-8"><p className="text-sm font-bold text-soil">Jerigen kocor</p><h3 className="mt-2 text-3xl font-black tracking-[-0.04em] text-forest">{product.title}</h3><p className="mt-2 text-sm text-[#64665b]">{product.sub}</p><div className="mt-6 border-y border-[#ded7c7] py-4"><strong className="block text-2xl font-black text-forest">{product.price}</strong><span className="text-xs font-semibold text-[#777568]">per ikat, isi 5 pcs</span></div><ul className="mt-5 grid gap-3">{product.features.map((feature) => <li key={feature} className="flex items-center gap-2 text-sm font-semibold text-[#4d5548]"><Check size={16} className="text-leaf" />{feature}</li>)}</ul><a href={`https://wa.me/628814394119?text=${encodeURIComponent(product.wa)}`} target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-forest px-4 text-sm font-bold text-white transition-colors hover:bg-leaf"><MessageCircle size={17} /> Pesan {product.title}</a></div></motion.article>)}</div>
        <motion.div initial={reveal} whileInView={visible} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: 0.15 }} className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-forest"><Package size={18} className="text-soil" /> Minimal pembelian satu ikat. Satu ikat berisi lima pcs.</motion.div>
      </div>
    </section>
  )
}
