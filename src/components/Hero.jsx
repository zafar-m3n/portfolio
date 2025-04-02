import { useEffect, useState, useMemo } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const phrases = useMemo(
    () => [
      "Full Stack Developer",
      "React.js Expert",
      "Node.js Developer",
      "Laravel Developer",
      "JavaScript Enthusiast",
    ],
    [],
  );

  useEffect(() => {
    let timer;

    if (isTyping) {
      if (typedText === phrases[currentPhrase]) {
        // Pause at the end of typing
        setIsTyping(false);
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      } else {
        // Continue typing
        timer = setTimeout(() => {
          setTypedText(phrases[currentPhrase].substring(0, typedText.length + 1));
        }, 100);
      }
    } else {
      if (typedText === "") {
        // Start typing the next phrase
        setIsTyping(true);
        setCurrentPhrase((current) => (current + 1) % phrases.length);
      } else {
        // Continue erasing
        timer = setTimeout(() => {
          setTypedText(typedText.substring(0, typedText.length - 1));
        }, 50);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isTyping, currentPhrase, phrases]);

  return (
    <section id="hero" className="relative flex h-screen flex-col justify-center">
      {/* Background design elements - hexagons like a honeycomb */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-10 top-10 h-24 w-24 rotate-45 transform rounded-md bg-bee-yellow/10"></div>
        <div className="absolute bottom-40 right-20 h-32 w-32 rotate-45 transform rounded-md bg-bee-yellow/10"></div>
        <div className="absolute right-1/4 top-1/3 h-16 w-16 rotate-45 transform rounded-md bg-bee-yellow/10"></div>
        <div className="absolute bottom-1/4 left-1/4 h-20 w-20 rotate-45 transform rounded-md bg-bee-yellow/10"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <div className="mb-4 text-bee-yellow">
            <p className="text-lg tracking-wider md:text-xl">Hello! I'm</p>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Zafarullah Naushad
            <span className="mt-2 block text-2xl text-bee-yellow md:text-3xl">
              aka <span className="font-mono">zafar.m3n</span>
            </span>
          </h1>

          <div className="mb-6 h-12">
            <h2 className="text-xl font-medium md:text-3xl">
              I'm a <span className="font-mono text-bee-yellow">{typedText}</span>
              <span
                className={`ml-1 inline-block h-6 w-2 bg-bee-yellow ${isTyping ? "animate-pulse" : ""}`}
              ></span>
            </h2>
          </div>

          <p className="mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            With nearly 5 years of coding experience and 2 years of professional work, I build
            robust, scalable web applications that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn">
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded border-2 border-bee-yellow bg-transparent px-6 py-2 text-bee-yellow transition-all duration-300 hover:bg-bee-yellow hover:text-bee-black"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce-slow">
        <a href="#about" aria-label="Scroll down" className="inline-block text-bee-yellow">
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
