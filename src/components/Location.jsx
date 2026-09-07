import { MapPin, Clock3, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function Location() {
  return (
    <section id="location" className="jk-section">
      <div className="jk-location-grid">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2>Datang Langsung atau Kirim?</h2>
          <p>Buka setiap hari. Bisa COD & cek barang di gudang.</p>
          <div className="jk-contact-list">
            <div><MapPin size={18} /><div><strong>Gudang & Toko</strong><span>Jalan Slamet Raharjo Balongbendo Gang Tengah, RT.7/RW.1, Sidoarjo, Jawa Timur 61257</span></div></div>
            <div><Clock3 size={18} /><div><strong>Jam Buka</strong><span>Senin – Sabtu 07.00 – 17.00, Minggu 07.00 – 15.00</span></div></div>
            <div><Phone size={18} /><div><strong>Telepon / WA</strong><span>0881-4394-119 (Fast Respon)</span></div></div>
          </div>
          <div className="jk-location-actions">
            <a href="https://maps.app.goo.gl/wuunQk99Hw1yffGt8" target="_blank" rel="noreferrer" className="btn-primary"><MapPin size={16} /> Buka di Google Maps</a>
          </div>
        </motion.div>
        <motion.div className="jk-map" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
          <iframe
            title="Lokasi Jerigen Kocor"
            src="https://www.openstreetmap.org/export/embed.html?bbox=112.537293%2C-7.422704%2C112.557293%2C-7.402704&amp;layer=mapnik&amp;marker=-7.412704%2C112.547293"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <span>Gudang Sidoarjo pengiriman ke seluruh Jawa via cargo & ekspedisi</span>
        </motion.div>
      </div>
    </section>
  )
}
