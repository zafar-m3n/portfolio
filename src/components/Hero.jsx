import { useEffect, useState, useMemo } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const phrases = useMemo(() => [
    'Full Stack Developer',
    'React.js Expert',
    'Node.js Developer',
    'Laravel Developer',
    'JavaScript Enthusiast'
  ], []);

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
      if (typedText === '') {
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
    <section id="hero" className="relative h-screen flex flex-col justify-center">
      {/* Background design elements - hexagons like a honeycomb */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-bee-yellow/10 rounded-md transform rotate-45"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-bee-yellow/10 rounded-md transform rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-bee-yellow/10 rounded-md transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-bee-yellow/10 rounded-md transform rotate-45"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl">
          <div className="mb-4 text-bee-yellow">
            <p className="text-lg md:text-xl tracking-wider">Hello! I'm</p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Zafarullah Naushad
            <span className="block text-2xl md:text-3xl text-bee-yellow mt-2">
              aka <span className="font-mono">zafar.m3n</span>
            </span>
          </h1>

          <div className="h-12 mb-6">
            <h2 className="text-xl md:text-3xl font-medium">
              I'm a <span className="text-bee-yellow font-mono">{typedText}</span>
              <span className={`inline-block w-2 h-6 bg-bee-yellow ml-1 ${isTyping ? 'animate-pulse' : ''}`}></span>
            </h2>
          </div>

          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl">
            With nearly 5 years of coding experience and 2 years of professional work,
            I build robust, scalable web applications that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn">
              View My Work
            </a>
            <a href="#contact" className="bg-transparent border-2 border-bee-yellow text-bee-yellow px-6 py-2 rounded hover:bg-bee-yellow hover:text-bee-black transition-all duration-300">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a href="#about" aria-label="Scroll down" className="inline-block text-bee-yellow">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
