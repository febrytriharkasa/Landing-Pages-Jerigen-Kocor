export default function Footer() {
  return (
    <footer className="jk-footer">
      <div>
        <strong>Jerigen Kocor</strong>
        <span>Produsen & toko jerigen kocor Sidoarjo. Jual per ikat (1 ikat = 5 pcs). Tidak jual satuan.</span>
      </div>
      <div className="jk-footer-links">
        <a href="#home">Home</a><a href="#about">About</a><a href="#pricing">Pricing</a><a href="#location">Location</a>
      </div>
      <small>© {new Date().getFullYear()} © 2026 Jerigen Kocor. Hak cipta dilindungi undang-undang.</small>
    </footer>
  )
}
