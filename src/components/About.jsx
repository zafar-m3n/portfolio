const About = () => {
  return (
    <section id="about" className="bg-bee-dark py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading mx-auto">About Me</h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg border-4 border-bee-yellow">
              <img src="/me.jpg" alt="Zafarullah Naushad" className="h-full w-full object-cover" />
            </div>
            {/* Honeycomb decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rotate-45 transform rounded-md bg-bee-yellow/20"></div>
            <div className="absolute -right-6 -top-6 h-16 w-16 rotate-45 transform rounded-md bg-bee-yellow/20"></div>
          </div>

          <div>
            <h3 className="mb-3 text-2xl font-bold text-bee-yellow">Who am I?</h3>
            <p className="mb-6 text-gray-300">
              I'm Zafarullah Naushad, a passionate Full Stack Developer with a knack for creating
              efficient, user-friendly web applications. With nearly 5 years of coding experience
              and 2 years of professional work, I've honed my skills in a variety of technologies
              and methodologies.
            </p>

            <h3 className="mb-3 text-2xl font-bold text-bee-yellow">My Journey</h3>
            <p className="mb-6 text-gray-300">
              My journey in software development began with a curiosity about how websites work.
              This curiosity led me down a path of continuous learning and growth. Today, I
              specialize in building full-stack applications using modern JavaScript frameworks like
              React.js for frontend and Node.js for backend, along with Laravel for PHP-based
              solutions.
            </p>

            <h3 className="mb-3 text-2xl font-bold text-bee-yellow">What I Do</h3>
            <p className="mb-6 text-gray-300">
              I transform ideas into reality through code. Whether it's developing a complex web
              application, optimizing database performance, or creating intuitive user interfaces, I
              approach each project with enthusiasm and dedication to deliver the best possible
              solution.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="mb-2 font-bold text-bee-yellow">Location:</h4>
                <p className="text-gray-300">Available Remotely</p>
              </div>
              <div>
                <h4 className="mb-2 font-bold text-bee-yellow">Experience:</h4>
                <p className="text-gray-300">2+ Years Professional</p>
              </div>
              <div>
                <h4 className="mb-2 font-bold text-bee-yellow">Education:</h4>
                <p className="text-gray-300">
                  BEng in Software Engineering
                  <br />
                  Self-taught & Continuous Learning
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-bold text-bee-yellow">Work Status:</h4>
                <p className="text-gray-300">
                  Available for Freelance
                  <br />
                  Associate Software Engineer at MetaCorp Pvt Ltd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
