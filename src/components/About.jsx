import brandLogo from "/jerigen.svg"
import { motion, useReducedMotion } from "framer-motion"
import { Factory, ShieldCheck, Truck } from "lucide-react"

const reasons = [
  { Icon: ShieldCheck, title: "Bodi tebal", desc: "HDPE virgin membantu jerigen tetap kokoh untuk pemakaian rutin." },
  { Icon: Factory, title: "Langsung dari gudang", desc: "Pesan dari Sidoarjo, lalu tanyakan stok dan ongkir sesuai tujuan." },
  { Icon: Truck, title: "Siap dibawa kerja", desc: "Ukuran, tutup, tas, dan alat kocor dipilih untuk kebutuhan lapangan." },
]

export default function About() {
  const reduceMotion = useReducedMotion()
  const reveal = reduceMotion ? false : { opacity: 0, y: 24 }
  const visible = reduceMotion ? undefined : { opacity: 1, y: 0 }

  return (
    <section id="about" className="bg-[#fcfaf5]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <motion.div initial={reveal} whileInView={visible} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="mb-16 grid items-center gap-8 border-b border-[#ded7c7] pb-12 md:grid-cols-[auto_1fr] md:gap-10">
          <div className="grid h-32 w-32 place-items-center rounded-[1.75rem] border border-[#d8cfbe] bg-[#f1eadb] p-3 sm:h-40 sm:w-40">
            <img src={brandLogo} alt="Logo Jerigen Kocor" className="h-full w-full object-contain" />
          </div>
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-soil">Cerita brand</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-forest sm:text-4xl">Jerigen Kocor, teman kerja dari gudang sampai kebun.</h2>
            <p className="mt-4 leading-7 text-[#64665b]">Berawal dari kebutuhan perlengkapan kocor yang praktis untuk pekerjaan sehari-hari, Jerigen Kocor menyediakan jerigen HDPE dan perlengkapannya langsung dari Sidoarjo. Kami ingin memudahkan petani dan pedagang memilih ukuran, mengecek stok, lalu mengatur pengiriman dengan jelas.</p>
          </div>
        </motion.div>
        <motion.div initial={reveal} whileInView={visible} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }} className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div><p className="text-sm font-bold text-soil">Kenapa Jerigen Kocor</p><h2 className="mt-3 max-w-md text-4xl font-black leading-tight tracking-[-0.05em] text-forest sm:text-5xl">Satu perlengkapan, banyak pekerjaan.</h2><p className="mt-5 max-w-md leading-7 text-[#64665b]">Untuk air, solar, bensin, minyak, dan kebutuhan lain di sekitar kebun. Kami fokus pada barang yang mudah dipahami dan mudah dipesan.</p></div>
          <div className="grid gap-5 md:grid-cols-3">{reasons.map(({ Icon, title, desc }, index) => <motion.article key={title} initial={reveal} whileInView={visible} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.1 }} className="border-t-2 border-soil/70 pt-4"><Icon size={24} className="text-leaf" /><h3 className="mt-6 text-xl font-black text-forest">{title}</h3><p className="mt-3 text-sm leading-6 text-[#64665b]">{desc}</p></motion.article>)}</div>
        </motion.div>
        <motion.div initial={reveal} whileInView={visible} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, delay: 0.15 }} className="mt-16 grid gap-6 rounded-[1.5rem] bg-forest p-6 text-white sm:p-8 lg:grid-cols-[1fr_1.15fr] lg:p-10"><div><p className="text-sm font-bold text-[#e5c0a2]">Spesifikasi yang perlu diketahui</p><h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">Pilih kapasitas berdasarkan ritme kerja.</h3></div><dl className="grid gap-3 sm:grid-cols-2"><div className="border-b border-white/15 pb-3"><dt className="text-sm text-[#cbd6c1]">Kapasitas</dt><dd className="mt-1 font-bold">20 liter atau 25 liter</dd></div><div className="border-b border-white/15 pb-3"><dt className="text-sm text-[#cbd6c1]">Bahan</dt><dd className="mt-1 font-bold">HDPE virgin</dd></div><div className="border-b border-white/15 pb-3"><dt className="text-sm text-[#cbd6c1]">Perlengkapan</dt><dd className="mt-1 font-bold">Stik, selang, tas, saringan, corong</dd></div><div className="border-b border-white/15 pb-3"><dt className="text-sm text-[#cbd6c1]">Warna</dt><dd className="mt-1 font-bold">Biru dan putih</dd></div></dl></motion.div>
      </div>
    </section>
  )
}
