const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-bee-yellow/20 bg-bee-dark py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold text-bee-yellow">Zafarullah Naushad</h3>
            <p className="mb-4 text-gray-300">
              Fullstack Developer specializing in modern web technologies. Building robust and
              scalable web applications.
            </p>
            <p className="text-white">
              <span className="font-mono text-bee-yellow">zafar.m3n</span>
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-bee-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-300 transition-colors hover:text-bee-yellow">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 transition-colors hover:text-bee-yellow">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 transition-colors hover:text-bee-yellow">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 transition-colors hover:text-bee-yellow"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 transition-colors hover:text-bee-yellow"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-bee-yellow">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="mr-2 text-bee-yellow">Email:</span>
                <a
                  href="mailto:thezafar.m3n@gmail.com"
                  className="transition-colors hover:text-bee-yellow"
                >
                  thezafar.m3n@gmail.com
                </a>
              </li>
              <li className="text-gray-300">
                <span className="mr-2 text-bee-yellow">GitHub:</span>
                <a
                  href="https://github.com/zafar-m3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-bee-yellow"
                >
                  zafar-m3n
                </a>
              </li>
              <li className="text-gray-300">
                <span className="mr-2 text-bee-yellow">LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/zafar-m3n/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-bee-yellow"
                >
                  zafar-m3n
                </a>
              </li>
              <li className="text-gray-300">
                <span className="mr-2 text-bee-yellow">Instagram:</span>
                <a
                  href="https://www.instagram.com/zafar.m3n/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-bee-yellow"
                >
                  zafar.m3n
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bee-yellow/10 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Zafarullah Naushad. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <span className="mx-2 inline-block">JavaScript Enthusiast</span>
            <span className="text-bee-yellow">•</span>
            <span className="mx-2 inline-block">Full Stack Developer</span>
            <span className="text-bee-yellow">•</span>
            <span className="mx-2 inline-block">Problem Solver</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
