import { ShieldCheck, Factory, Truck, Check } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="jk-section">
      <div className="jk-section-head">
        <h2>Mengapa Jerigen Kocor Kami Beda?</h2>
        <p>Bukan kaleng-kaleng. Material virgin HDPE, cetakan presisi, tutup kocor ulir rapat.</p>
      </div>
      <div className="jk-grid-3">
        <div className="jk-card">
          <div className="jk-card-icon"><ShieldCheck size={22} /></div>
          <h3>Tahan Lama</h3>
          <p>Material virgin HDPE yang tahan lama dan tidak mudah rusak dan tas gendongan yang kuat serta nyaman.</p>
        </div>
        <div className="jk-card">
          <div className="jk-card-icon"><Factory size={22} /></div>
          <h3>Pabrik Langsung</h3>
          <p>Harga produsen tanpa perantara — jual per ikat (5 pcs). Beli banyak makin hemat.</p>
        </div>
        <div className="jk-card">
          <div className="jk-card-icon"><Truck size={22} /></div>
          <h3>Stok Ready & Kilat</h3>
          <p>Stok 20L / 25L selalu ready. Minimal 1 ikat (5 pcs). Kirim se-Indonesia.</p>
        </div>
      </div>
      <div className="jk-about-split">
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
      </div>
    </section>
  )
}
