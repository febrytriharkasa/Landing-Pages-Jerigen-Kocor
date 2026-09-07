import { Check, Package } from "lucide-react"
import { motion } from "framer-motion"
import heroImg20Liter from "../assets/20Liter500x500px.png"
import heroImg25Liter from "../assets/25Liter500x500px.png"

export default function Pricing() {
  return (
    <section id="pricing" className="jk-section jk-alt">
      <motion.div className="jk-section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2>Daftar Harga Paket</h2>
        <div className="jk-pricing-note">
          <Package size={14} /> Tidak menerima eceran atau satuan · Satu ikat 5 pcs · Pembelian minimal dua ikat 10 pcs · Beli banyak lebih hemat
        </div>
      </motion.div>
      <div className="jk-pricing-grid">
        {[
          { img: heroImg20Liter, alt: "Jerigen Kocor 20 Liter", title: "20 Liter", sub: "Ukuran standar harga satuan Rp.110.000", price: "Rp 550.000", features: ["Ukuran standar", "Tas gendongan", "Stik + Selang + Corong + Saringan"], wa: "Mau%20pesan%20Jerigen%2020L%20-%201%20ikat%20(5%20pcs)" },
          { img: heroImg25Liter, alt: "Jerigen Kocor 25 Liter", title: "25 Liter", sub: "Ukuran besar harga satuan Rp.130.000", price: "Rp 650.000", features: ["Ukuran besar", "Tas gendongan", "Stik + Selang + Corong + Saringan"], wa: "Mau%20pesan%20Jerigen%2025L%20-%201%20ikat%20(5%20pcs)", ribbon: "Best Seller" },
        ].map((p, i) => (
          <motion.div key={p.title} className="jk-price jk-featured" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}>
            {p.ribbon && <span className="jk-ribbon">{p.ribbon}</span>}
            <div className="jk-price-img"><img src={p.img} alt={p.alt} loading="lazy" /></div>
            <h3>{p.title}</h3>
            <p className="jk-price-sub">{p.sub}</p>
            <div className="jk-price-ikat"><span className="jk-price-num">{p.price}</span><span className="jk-price-ikat-label">/ per ikat</span></div>
            <ul>{p.features.map((f) => <li key={f}><Check size={14} /> {f}</li>)}</ul>
            <a href={`https://wa.me/628814394119?text=${p.wa}`} target="_blank" rel="noreferrer" className="btn-primary btn-block">Pesan Sekarang</a>
            <small>Beli banyak lebih hemat</small>
          </motion.div>
        ))}
      </div>
      <motion.p className="jk-note" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>1 ikat = 5 pcs. Tidak menerima eceran satuan. Chat WhatsApp untuk cek stok warna & ongkir.</motion.p>
    </section>
  )
}
