import { useEffect, useState } from "react"
import { Factory, BadgeCheck, ShieldCheck, Truck, MessageCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import heroImg1 from "../assets/20_liter.png"
import heroImg2 from "../assets/25_liter.png"
import heroImg3 from "../assets/alat.png"

const slides = [
  { src: heroImg1, alt: "Jerigen Kocor 20 Liter — HDPE tebal anti bocor" },
  { src: heroImg2, alt: "Jerigen Kocor 25 Liter — best seller tutup kocor rapat" },
  { src: heroImg3, alt: "Stok gudang ready — siap kirim se-Indonesia" },
]

export default function Home() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3000)
    return () => clearInterval(id)
  }, [paused])

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <section id="home" className="jk-hero">
      <div className="jk-hero-text">
        <h1>Jerigen Kocor <span>Kuat, Rapat,</span> Siap Kirim Se-Indonesia</h1>
        <p>Pabrik & toko jerigen HDPE untuk air, bensin, minyak, dan kebutuhan industri. Tebal, tidak bocor, tutup kocor anti rembes. Jual per ikat (1 ikat = 5 pcs) tidak menerima eceran atau satuan.</p>
        <div className="jk-hero-actions">
          <a href="https://wa.me/628814394119?text=Halo%20Jerigen%20Kocor" target="_blank" rel="noreferrer" className="btn-primary">
            <MessageCircle size={18} /> Chat WhatsApp <ArrowRight size={16} />
          </a>
          <a href="#pricing" className="btn-ghost">Lihat Harga</a>
        </div>
        <div className="jk-hero-stats">
          <div><strong>20k+</strong><span>Jerigen Terjual</span></div>
          <div><strong>500+</strong><span>Pelanggan Grosir</span></div>
        </div>
      </div>

      <div className="jk-hero-visual">
        <div
          className="jk-hero-card jk-slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Galeri jerigen kocor"
        >
          <div className="jk-slider-viewport">
            <div className="jk-slider-track" style={{ transform: `translateX(-${index * 100}%)` }} aria-live="polite">
              {slides.map((s, i) => (
                <div key={i} className="jk-slide" aria-hidden={i !== index} aria-label={`${i + 1} dari ${slides.length}`}>
                  <img key={i === index ? `active-${index}` : `inactive-${i}`} src={s.src} alt={s.alt} loading="eager" />
                </div>
              ))}
            </div>
          </div>

          <button className="jk-slider-arrow prev" onClick={prev} aria-label="Slide sebelumnya">
            <ChevronLeft size={18} />
          </button>
          <button className="jk-slider-arrow next" onClick={next} aria-label="Slide berikutnya">
            <ChevronRight size={18} />
          </button>

          <div className="jk-slider-dots" role="tablist" aria-label="Pilih slide">
            {slides.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Ke slide ${i + 1}`}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <div className="jk-hero-float"><ShieldCheck size={18} /> Garansi Rusak Ganti Baru</div>
        </div>

        <div className="jk-hero-mini">
          <span><BadgeCheck size={16} /> HDPE Tebal 2mm</span>
          <span><Truck size={16} /> Kirim Hari Ini</span>
        </div>
      </div>
    </section>
  )
}
