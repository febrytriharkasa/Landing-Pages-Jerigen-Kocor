import { ShieldCheck, Factory, Truck, Check } from "lucide-react"
import { motion } from "framer-motion"

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } }

export default function About() {
  return (
    <section id="about" className="jk-section">
      <motion.div className="jk-section-head" {...fadeUp}>
        <h2>Mengapa Jerigen Kocor Kami Beda?</h2>
        <p>Bukan kaleng-kaleng. Material virgin HDPE, cetakan presisi, tutup kocor ulir rapat.</p>
      </motion.div>
      <div className="jk-grid-3">
        {[
          { Icon: ShieldCheck, title: "Tahan Lama", desc: "Material virgin HDPE yang tahan lama dan tidak mudah rusak dan tas gendongan yang kuat serta nyaman." },
          { Icon: Factory, title: "Pabrik Langsung", desc: "Harga produsen tanpa perantara — jual per ikat (5 pcs). Beli banyak makin hemat." },
          { Icon: Truck, title: "Stok Ready & Kilat", desc: "Stok 20L / 25L selalu ready. Minimal 1 ikat (5 pcs). Kirim se-Indonesia." },
        ].map(({ Icon, title, desc }, i) => (
          <motion.div key={title} className="jk-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}>
            <div className="jk-card-icon"><Icon size={22} /></div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div className="jk-about-split" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
        <ul className="jk-checks">
          <li><Check size={16} /> Plastik HDPE virgin food-grade</li>
          <li><Check size={16} /> Dinding tebal tidak mudah penyok</li>
          <li><Check size={16} /> Tas gendongan yang kuat dan nyaman</li>
          <li><Check size={16} /> Bisa untuk air, solar, bensin, minyak</li>
        </ul>
        <div className="jk-specs">
          <h4>Spesifikasi Singkat</h4>
          <dl>
            <div><dt>Kapasitas</dt><dd>20L / 25L</dd></div>
            <div><dt>Bahan</dt><dd>HDPE Virgin</dd></div>
            <div><dt>Alat Tambahan</dt><dd>Stik, Selang, Gendongan, Saringan, Corong</dd></div>
            <div><dt>Warna</dt><dd>Biru, Putih</dd></div>
          </dl>
        </div>
      </motion.div>
    </section>
  )
}
