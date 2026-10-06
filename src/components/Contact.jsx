import { motion, useReducedMotion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function Contact() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section id="contact" initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65 }} className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-[1.5rem] bg-soil px-6 py-10 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:py-12">
        <div><p className="text-sm font-bold text-[#ffe1ca]">Pesanan satu ikat atau lebih</p><h2 className="mt-2 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Sebutkan ukuran dan tujuan kirim.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/90">Kami bantu cek stok, warna, dan ongkir lewat WhatsApp.</p></div>
        <a href="https://wa.me/628814394119?text=Halo%20Jerigen%20Kocor%2C%20saya%20mau%20minta%20katalog%20dan%20harga" target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-[#7b3f25] transition-transform hover:-translate-y-0.5"><MessageCircle size={18} /> Buka WhatsApp</a>
      </div>
    </motion.section>
  )
}
