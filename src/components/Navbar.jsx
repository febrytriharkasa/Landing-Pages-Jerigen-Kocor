import { useEffect, useState } from "react"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { Menu, MessageCircle, X } from "lucide-react"
import imgIcon from "/jerigen.svg"

const links = [
  ["home", "Beranda"],
  ["about", "About"],
  ["pricing", "Produk"],
  ["location", "Lokasi"],
  ["contact", "Contact"],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("home")

    useEffect(() => {
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            setScrolled(window.scrollY > 16)
            const current = links.find(([id]) => {
              const section = document.getElementById(id)
              if (!section) return false
              const { top, bottom } = section.getBoundingClientRect()
              return top <= 120 && bottom >= 120
            })
            if (current) setActive(current[0])
            ticking = false;
          });
          ticking = true;
        }
      }

      handleScroll()
      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

  const closeMenu = () => setOpen(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 border-b border-[#ded7c7]/80 bg-[#fcfaf5]/90 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_8px_24px_rgba(32,39,31,0.08)]" : ""
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10"
        aria-label="Navigasi utama"
      >
        <Link
          to="home"
          href="#home"
          smooth
          duration={650}
          offset={-72}
          className="flex min-h-11 cursor-pointer items-center gap-3 text-sm font-bold tracking-[-0.02em] text-forest"
          onClick={closeMenu}
        >
          <img src={imgIcon} alt="" className="h-10 w-10 rounded-xl object-contain" />
          <span>Jerigen Kocor</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([id, label]) => (
            <Link
              key={id}
              to={id}
              href={`#${id}`}
              smooth
              duration={650}
              offset={-72}
              spy
              activeClass="active"
              className={`relative flex min-h-11 cursor-pointer items-center text-sm font-semibold transition-colors ${
                active === id ? "text-forest" : "text-[#6c6b60] hover:text-forest"
              }`}
              onClick={closeMenu}
            >
              {label}
              <span
                className={`absolute bottom-1 left-0 h-0.5 bg-soil transition-all ${
                  active === id ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </div>

        <a
          href="https://wa.me/628814394119?text=Halo%20Jerigen%20Kocor%2C%20saya%20mau%20tanya%20produk"
          target="_blank"
          rel="noreferrer"
          className="hidden min-h-11 items-center gap-2 rounded-xl bg-forest px-4 text-sm font-bold text-white transition-colors hover:bg-leaf lg:inline-flex"
        >
          <MessageCircle size={16} /> Pesan lewat WhatsApp
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-[#d8d0bf] bg-white text-forest lg:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#ded7c7] bg-[#fcfaf5] px-5 pb-5 pt-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
             {links.map(([id, label]) => (
               <Link
                 key={id}
                 to={id}
                 href={`#${id}`}
                 smooth
                 duration={650}
                 offset={-72}
                 spy
                 activeClass="active"
                 className={`flex min-h-12 cursor-pointer items-center border-b border-[#e5dfd1] text-sm font-semibold ${
                   active === id ? "text-forest" : "text-[#6c6b60]"
                 }`}
                 onClick={closeMenu}
               >
                {label}
              </Link>
            ))}
            <a
              href="https://wa.me/628814394119?text=Halo%20Jerigen%20Kocor%2C%20saya%20mau%20tanya%20produk"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-forest px-4 text-sm font-bold text-white"
              onClick={closeMenu}
            >
              <MessageCircle size={16} /> Pesan lewat WhatsApp
            </a>
          </div>
        </div>
      )}
    </motion.header>
  )
}
