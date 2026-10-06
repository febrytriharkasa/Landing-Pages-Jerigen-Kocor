import { motion, useReducedMotion } from "framer-motion"
import { Clock3, MapPin, Phone } from "lucide-react"

export default function Location() {
  const reduceMotion = useReducedMotion()
  const reveal = reduceMotion ? false : { opacity: 0, y: 24 }
  const visible = reduceMotion ? undefined : { opacity: 1, y: 0 }

  return (
    <section id="location" className="bg-[#fcfaf5]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-28">
        <motion.div initial={reveal} whileInView={visible} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65 }}>
          <p className="text-sm font-bold text-soil">Ambil atau kirim</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-forest sm:text-5xl">Datang ke gudang atau biar kami bantu kirim.</h2><p className="mt-5 leading-7 text-[#64665b]">Cek barang langsung di Sidoarjo, atau kirim detail tujuan lewat WhatsApp agar ongkir bisa dihitung.</p>
          <div className="mt-8 grid gap-5">
            <div className="flex gap-3 border-b border-[#ded7c7] pb-5"><MapPin className="mt-1 shrink-0 text-soil" size={20} /><div><strong className="block text-sm text-forest">Gudang dan toko</strong><span className="mt-1 block text-sm leading-6 text-[#64665b]">Jalan Slamet Raharjo Balongbendo Gang Tengah, RT.7/RW.1, Sidoarjo, Jawa Timur 61257</span></div></div>
            <div className="flex gap-3 border-b border-[#ded7c7] pb-5"><Clock3 className="mt-1 shrink-0 text-soil" size={20} /><div><strong className="block text-sm text-forest">Jam buka</strong><span className="mt-1 block text-sm leading-6 text-[#64665b]">Senin sampai Sabtu, 07.00 sampai 17.00. Minggu, 07.00 sampai 15.00.</span></div></div>
            <div className="flex gap-3 border-b border-[#ded7c7] pb-5"><Phone className="mt-1 shrink-0 text-soil" size={20} /><div><strong className="block text-sm text-forest">Telepon dan WhatsApp</strong><span className="mt-1 block text-sm leading-6 text-[#64665b]">0881-4394-119</span></div></div>
          </div>
          <a href="https://maps.app.goo.gl/wuunQk99Hw1yffGt8" target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl border border-forest/25 px-5 text-sm font-bold text-forest transition-colors hover:bg-[#f1eadb]"><MapPin size={17} /> Buka Google Maps</a>
        </motion.div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: 24 }} whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.65, delay: 0.1 }} className="overflow-hidden rounded-[1.5rem] border border-[#d8cfbe] bg-[#e7dfcf] shadow-[0_16px_38px_rgba(73,62,36,0.1)]"><iframe title="Lokasi gudang Jerigen Kocor" src="https://www.openstreetmap.org/export/embed.html?bbox=112.537293%2C-7.422704%2C112.557293%2C-7.402704&amp;layer=mapnik&amp;marker=-7.412704%2C112.547293" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[360px] w-full border-0 sm:h-[460px]" /><p className="m-0 px-5 py-4 text-sm font-semibold text-forest">Gudang Sidoarjo, melayani pengiriman sesuai tujuan.</p></motion.div>
      </div>
    </section>
  )
}
