import { useState, useEffect } from "react";
import "./Header.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Categories", href: "#categories" },
  { label: "Athlete", href: "#athlete" },
  { label: "Store", href: "#store" },
  { label: "Offers", href: "#offers" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>

      {/* Left — Logo */}
      <a href="#hero" className="header-logo" onClick={(e) => handleNav(e, "#hero")}>
        <span className="header-logo-text">MADURAI</span>
        <span className="header-logo-accent">PROTEIN HUB</span>
      </a>

      {/* Center — Nav */}
      <nav className={`header-nav ${menuOpen ? "header-nav--open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="header-nav-link"
            onClick={(e) => handleNav(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Right — CTA */}
      <div className="header-right">
        <a
          href="https://wa.me/919876543210"
          className="header-cta"
          target="_blank"
          rel="noreferrer"
        >
          Order Now
        </a>

        {/* Hamburger */}
        <button
          className={`header-hamburger ${menuOpen ? "header-hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

    </header>
  );
}