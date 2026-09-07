import { Check, Package } from "lucide-react"
import heroImg20Liter from "../assets/20Liter500x500px.png"
import heroImg25Liter from "../assets/25Liter500x500px.png"

export default function Pricing() {
  return (
    <section id="pricing" className="jk-section jk-alt">
      <div className="jk-section-head">
        <h2>Daftar Harga Paket</h2>
          <div className="jk-pricing-note">
            <Package size={14} /> Tidak menerima eceran atau satuan · Satu ikat 5 pcs · Pembelian minimal dua ikat 10 pcs · Beli banyak lebih hemat 
          </div>
      </div>
      <div className="jk-pricing-grid">
        <div className="jk-price jk-featured">
          <div className="jk-price-img">
            <img src={heroImg20Liter} alt="Jerigen Kocor 20 Liter" loading="lazy" />
          </div>
          <h3>20 Liter</h3>
          <p className="jk-price-sub">Ukuran standar isi 1 ikat (5 pcs)</p>
          <div className="jk-price-ikat">
            <span className="jk-price-num">Rp 400.000</span>
            <span className="jk-price-ikat-label">/ per ikat</span>
          </div>
          <ul>
            <li><Check size={14} /> Ukuran standar</li>
            <li><Check size={14} /> Tas gendongan</li>
            <li><Check size={14} /> Stik + Selang + Corong + Saringan</li>
          </ul>
          <a href="https://wa.me/628814394119?text=Mau%20pesan%20Jerigen%2020L%20-%201%20ikat%20(5%20pcs)" target="_blank" rel="noreferrer" className="btn-primary btn-block">Pesan Sekarang</a>
          <small>Beli banyak lebih hemat</small>
        </div>
        <div className="jk-price jk-featured">
          <span className="jk-ribbon">Best Seller</span>
          <div className="jk-price-img">
            <img src={heroImg25Liter} alt="Jerigen Kocor 25 Liter" loading="lazy" />
          </div>
          <h3>25 Liter</h3>
          <p className="jk-price-sub">Ukuran besar isi 1 ikat (5 pcs)</p>
          <div className="jk-price-ikat">
            <span className="jk-price-num">Rp 600.000</span>
            <span className="jk-price-ikat-label">/ per ikat</span>
          </div>
          <ul>
            <li><Check size={14} /> Ukuran besar</li>
            <li><Check size={14} /> Tas gendongan</li>
            <li><Check size={14} /> Stik + Selang + Corong + Saringan</li>
          </ul>
          <a href="https://wa.me/628814394119?text=Mau%20pesan%20Jerigen%2025L%20-%201%20ikat%20(5%20pcs)" target="_blank" rel="noreferrer" className="btn-primary btn-block">Pesan Sekarang</a>
          <small>Beli banyak lebih hemat</small>
        </div>
      </div>
      <p className="jk-note"> 1 ikat = 5 pcs. Tidak menerima eceran satuan. Chat WhatsApp untuk cek stok warna & ongkir.</p>
    </section>
  )
}
