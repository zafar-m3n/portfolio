import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-bee-black/95 py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a
          href="#hero"
          className="text-2xl font-bold text-bee-yellow transition-colors duration-300 hover:text-bee-light"
        >
          zafar<span className="text-white">.m3n</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <a href="#contact" className="btn">
            Hire Me
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="text-bee-yellow focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute left-0 top-full w-full bg-bee-black/95 shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="container mx-auto flex flex-col space-y-4 px-4 py-4">
          <a href="#about" className="nav-link py-2" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#skills" className="nav-link py-2" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#projects" className="nav-link py-2" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" className="nav-link py-2" onClick={() => setIsOpen(false)}>
            Contact
          </a>
          <a href="#contact" className="btn w-fit" onClick={() => setIsOpen(false)}>
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
