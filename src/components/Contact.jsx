import { MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="jk-cta">
      <div>
        <h2>Butuh 1 Ikat atau 1 Truk?</h2>
        <p>Minimal 1 ikat (5 pcs) tidak jual satuan. Chat sekarang, stok difoto dari gudang + hitung ongkir.</p>
      </div>
      <div className="jk-cta-actions">
        <a href="https://wa.me/628814394119?text=Halo%20Jerigen%20Kocor%2C%20minta%20katalog%20%26%20harga%20grosir" target="_blank" rel="noreferrer" className="btn-primary btn-lg"><MessageCircle size={20} /> WhatsApp Sekarang</a>
      </div>
    </section>
  )
}
