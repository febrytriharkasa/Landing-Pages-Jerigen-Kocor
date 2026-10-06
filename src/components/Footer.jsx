import { Link } from "react-scroll"
import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react"
import brandLogo from "/jerigen.svg"

const scrollProps = { smooth: true, duration: 650, offset: -72 }

export default function Footer() {
  return (
    <footer className="border-t border-[#ded7c7] bg-[#f1eadb]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.9fr_1.35fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={brandLogo} alt="Logo Jerigen Kocor" className="h-12 w-12 rounded-xl object-contain" />
              <div>
                <strong className="block text-base font-black text-forest">Jerigen Kocor</strong>
                <span className="text-xs font-semibold text-soil">Teman kerja dari gudang sampai kebun</span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#64665b]">Produsen dan toko jerigen kocor dari Sidoarjo. Kami menyediakan jerigen HDPE 20 liter dan 25 liter beserta perlengkapan kocor untuk kebutuhan petani, pedagang, dan pekerjaan lapangan.</p>
            <p className="mt-4 text-sm font-bold text-forest">Jual per ikat, isi 5 pcs. Tidak jual satuan.</p>
          </div>

          <div>
            <h2 className="text-sm font-black text-forest">Navigasi</h2>
            <nav className="mt-5 grid gap-3 text-sm font-semibold text-[#64665b]" aria-label="Navigasi footer">
              <Link to="home" {...scrollProps} className="cursor-pointer hover:text-forest">Beranda</Link>
              <Link to="about" {...scrollProps} className="cursor-pointer hover:text-forest">About</Link>
              <Link to="pricing" {...scrollProps} className="cursor-pointer hover:text-forest">Produk</Link>
              <Link to="location" {...scrollProps} className="cursor-pointer hover:text-forest">Lokasi</Link>
              <Link to="contact" {...scrollProps} className="cursor-pointer hover:text-forest">Contact</Link>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-black text-forest">Produk</h2>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-[#64665b]">
              <Link to="pricing" {...scrollProps} className="cursor-pointer hover:text-forest"><strong className="block text-forest">Jerigen 20 Liter</strong>Ukuran ringkas untuk kebutuhan harian</Link>
              <Link to="pricing" {...scrollProps} className="cursor-pointer hover:text-forest"><strong className="block text-forest">Jerigen 25 Liter</strong>Ruang lebih untuk kerja lapangan</Link>
              <p><strong className="block text-forest">Perlengkapan kocor</strong>Stik, selang, tas, saringan, dan corong</p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black text-forest">Hubungi kami</h2>
            <div className="mt-5 grid gap-4 text-sm leading-6 text-[#64665b]">
              <a href="https://wa.me/628814394119?text=Halo%20Jerigen%20Kocor%2C%20saya%20mau%20tanya%20produk" target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-forest"><MessageCircle size={18} className="mt-1 shrink-0 text-soil" /><span><strong className="block text-forest">WhatsApp</strong>0881-4394-119</span></a>
              <a href="tel:+628814394119" className="flex items-start gap-3 hover:text-forest"><Phone size={18} className="mt-1 shrink-0 text-soil" /><span><strong className="block text-forest">Telepon</strong>0881-4394-119</span></a>
              <div className="flex items-start gap-3"><MapPin size={18} className="mt-1 shrink-0 text-soil" /><span><strong className="block text-forest">Alamat gudang</strong>Jalan Slamet Raharjo Balongbendo Gang Tengah, RT.7/RW.1, Sidoarjo, Jawa Timur 61257</span></div>
              <div className="flex items-start gap-3"><Clock3 size={18} className="mt-1 shrink-0 text-soil" /><span><strong className="block text-forest">Jam buka</strong>Senin sampai Sabtu, 07.00 sampai 17.00. Minggu, 07.00 sampai 15.00.</span></div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#ded7c7] pt-6 text-xs text-[#777568] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Jerigen Kocor. Hak cipta dilindungi.</span>
          <a href="https://maps.app.goo.gl/wuunQk99Hw1yffGt8" target="_blank" rel="noreferrer" className="font-bold text-forest hover:text-soil">Lihat lokasi di Google Maps</a>
        </div>
      </div>
    </footer>
  )
}
