import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { MessageCircle, Phone } from "lucide-react"
import brandLogo from "/jerigen.svg"

const scrollProps = { smooth: true, duration: 650, offset: -72 }

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.08 }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className="border-t border-[#ded7c7] bg-[#f1eadb]"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3">
              <img src={brandLogo} alt="Logo Jerigen Kocor" className="h-12 w-12 rounded-xl object-contain" />
              <div>
                <strong className="block text-base font-black text-forest">Jerigen Kocor</strong>
                <span className="text-xs font-semibold text-soil">Teman kerja dari gudang sampai kebun</span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#64665b]">
              Produsen dan toko jerigen kocor dari Sidoarjo. Kami menyediakan jerigen HDPE 20 liter dan 25 liter beserta perlengkapan kocor untuk kebutuhan petani, pedagang, dan pekerjaan lapangan.
            </p>
            <p className="mt-4 text-sm font-bold text-forest">Jual per ikat, isi 5 pcs. Tidak jual satuan.</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-sm font-black uppercase tracking-wider text-forest">Navigasi</h2>
            <nav className="mt-5 grid gap-3 text-sm font-semibold text-[#64665b]" aria-label="Navigasi footer">
              <Link to="home" {...scrollProps} className="cursor-pointer transition-colors hover:text-forest">Beranda</Link>
              <Link to="about" {...scrollProps} className="cursor-pointer transition-colors hover:text-forest">Tentang Kami</Link>
              <Link to="pricing" {...scrollProps} className="cursor-pointer transition-colors hover:text-forest">Produk & Harga</Link>
              <Link to="location" {...scrollProps} className="cursor-pointer transition-colors hover:text-forest">Lokasi Gudang</Link>
              <Link to="contact" {...scrollProps} className="cursor-pointer transition-colors hover:text-forest">Kontak Pesanan</Link>
            </nav>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-sm font-black uppercase tracking-wider text-forest">Hubungi Kami</h2>
            <div className="mt-5 grid gap-4 text-sm leading-6 text-[#64665b]">
              <a href="https://wa.me/628814394119?text=Halo%20Jerigen%20Kocor%2C%20saya%20mau%20tanya%20produk" target="_blank" rel="noreferrer" className="flex items-start gap-3 transition-colors hover:text-forest">
                <MessageCircle size={18} className="mt-1 shrink-0 text-soil" />
                <span><strong className="block text-forest">WhatsApp</strong>0881-4394-119</span>
              </a>
              <a href="tel:+628814394119" className="flex items-start gap-3 transition-colors hover:text-forest">
                <Phone size={18} className="mt-1 shrink-0 text-soil" />
                <span><strong className="block text-forest">Telepon</strong>0881-4394-119</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#ded7c7] pt-6 text-xs text-[#777568] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Jerigen Kocor. Hak cipta dilindungi.</span>
          <a href="https://maps.app.goo.gl/wuunQk99Hw1yffGt8" target="_blank" rel="noreferrer" className="font-bold text-forest transition-colors hover:text-soil">
            Lihat lokasi di Google Maps
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
