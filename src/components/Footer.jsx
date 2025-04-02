const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bee-dark py-10 border-t border-bee-yellow/20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-bee-yellow">Zafarullah Naushad</h3>
            <p className="text-gray-300 mb-4">
              Fullstack Developer specializing in modern web technologies.
              Building robust and scalable web applications.
            </p>
            <p className="text-white">
              <span className="font-mono text-bee-yellow">zafar.m3n</span>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-bee-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-300 hover:text-bee-yellow transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-bee-yellow transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-bee-yellow transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-bee-yellow transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-bee-yellow transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-bee-yellow">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="text-bee-yellow mr-2">Email:</span>
                <a href="mailto:thezafar.m3n@gmail.com" className="hover:text-bee-yellow transition-colors">thezafar.m3n@gmail.com</a>
              </li>
              <li className="text-gray-300">
                <span className="text-bee-yellow mr-2">GitHub:</span>
                <a href="https://github.com/zafar-m3n" target="_blank" rel="noopener noreferrer" className="hover:text-bee-yellow transition-colors">zafar-m3n</a>
              </li>
              <li className="text-gray-300">
                <span className="text-bee-yellow mr-2">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/zafar-m3n/" target="_blank" rel="noopener noreferrer" className="hover:text-bee-yellow transition-colors">zafar-m3n</a>
              </li>
              <li className="text-gray-300">
                <span className="text-bee-yellow mr-2">Instagram:</span>
                <a href="https://www.instagram.com/zafar.m3n/" target="_blank" rel="noopener noreferrer" className="hover:text-bee-yellow transition-colors">zafar.m3n</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-bee-yellow/10 text-center text-gray-400">
          <p>&copy; {currentYear} Zafarullah Naushad. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <span className="inline-block mx-2">JavaScript Enthusiast</span>
            <span className="text-bee-yellow">•</span>
            <span className="inline-block mx-2">Full Stack Developer</span>
            <span className="text-bee-yellow">•</span>
            <span className="inline-block mx-2">Problem Solver</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
