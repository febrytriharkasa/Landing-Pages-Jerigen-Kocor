import { motion } from "framer-motion"

export default function Trust() {
  return (
    <motion.section className="jk-trust" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <p>Dipercaya UMKM alat pertanian se-Jawa Timur</p>
      <div className="jk-trust-logos">
        <span>TOKO TANI JAYA</span><span>TOKO TANI SEJATERAH</span><span>SUMBER MAKMUR</span><span>TANI SUMBER ABADI</span>
      </div>
    </motion.section>
  )
}
