import { useState, useEffect } from "react"
import { Droplets, Menu, X, MessageCircle } from "lucide-react"
import imgIcon from "/jerigen.svg"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      const sections = ["home", "about", "pricing", "location", "contact"]
      const current = sections.find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom >= 120
      })
      if (current) setActive(current)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`jk-nav${scrolled ? " jk-nav-scrolled" : ""}`}>
      <a href="#home" className={`jk-brand${active === "home" ? " active" : ""}`}>
        <img src={imgIcon} alt="Icon Jerigen" loading="lazy" className="size-img-icon"/>
        Jerigen Kocor
      </a>
      <div className="jk-links">
        {["home", "about", "pricing", "location", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
      <a href="https://wa.me/628814394119?text=Halo%20Jerigen%20Kocor%2C%20mau%20tanya%20stok" className="jk-cta-nav" target="_blank" rel="noreferrer">
        <span><MessageCircle size={16} /> Pesan Sekarang</span>
      </a>
      <button className="jk-burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
        <span>{open ? <X size={20} /> : <Menu size={20} />}</span>
      </button>
      {open && (
        <div className="jk-mobile">
          {["home", "about", "pricing", "location", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a href="https://wa.me/628814394119?text=Halo%20Jerigen%20Kocor%2C%20mau%20tanya%20stok" className="jk-cta-mobile" target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> WhatsApp Kami
          </a>
        </div>
      )}
    </nav>
  )
}
