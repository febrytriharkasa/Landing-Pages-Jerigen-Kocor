import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <motion.section id="contact" className="jk-cta" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <div>
        <h2>Butuh 1 Ikat atau 1 Truk?</h2>
        <p>Minimal 1 ikat (5 pcs) tidak jual satuan. Chat sekarang, stok difoto dari gudang + hitung ongkir.</p>
      </div>
      <div className="jk-cta-actions">
        <motion.a href="https://wa.me/628814394119?text=Halo%20Jerigen%20Kocor%2C%20minta%20katalog%20%26%20harga%20grosir" target="_blank" rel="noreferrer" className="btn-primary btn-lg" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}><MessageCircle size={20} /> WhatsApp Sekarang</motion.a>
      </div>
    </motion.section>
  )
}
