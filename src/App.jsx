import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Pricing from "./components/Pricing.jsx"
import Location from "./components/Location.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#fcfaf5] text-ink">
      <Navbar />
      <main>
        <Home />
        <About />
        <Pricing />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
