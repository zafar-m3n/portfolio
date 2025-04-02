import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_PORTFOLIO_EMAIL_SERVICEID,
        import.meta.env.VITE_PORTFOLIO_EMAIL_TEMPLATEID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_PORTFOLIO_EMAIL_PUBLICKEY,
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="bg-bee-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading mx-auto">Get In Touch</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Have a project in mind or want to discuss a potential collaboration? I'm always open to
            new opportunities and challenges!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="rounded-lg border border-bee-yellow/20 bg-bee-dark p-8">
            <h3 className="mb-6 text-2xl font-bold text-bee-yellow">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-bee-yellow/20 p-3 text-bee-yellow">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 font-medium text-white">Email</h4>
                  <a
                    href="mailto:thezafar.m3n@gmail.com"
                    className="text-gray-300 transition-colors hover:text-bee-yellow"
                  >
                    thezafar.m3n@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-bee-yellow/20 p-3 text-bee-yellow">
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
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 font-medium text-white">Location</h4>
                  <p className="text-gray-300">Available for Remote Work Worldwide</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-bee-yellow/20 p-3 text-bee-yellow">
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
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 font-medium text-white">Work Status</h4>
                  <p className="text-gray-300">Available for Freelance</p>
                </div>
              </div>
            </div>

            <h3 className="mb-4 mt-10 text-xl font-bold text-bee-yellow">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/zafar-m3n"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-bee-gray p-3 text-white transition-all duration-300 hover:bg-bee-yellow hover:text-bee-black"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/zafar-m3n/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-bee-gray p-3 text-white transition-all duration-300 hover:bg-bee-yellow hover:text-bee-black"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/zafar.m3n/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-bee-gray p-3 text-white transition-all duration-300 hover:bg-bee-yellow hover:text-bee-black"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border border-bee-yellow/20 bg-bee-dark p-8">
            <h3 className="mb-6 text-2xl font-bold text-bee-yellow">Send Me a Message</h3>

            {submitStatus === "success" && (
              <div className="mb-4 rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700">
                <p>Thank you for your message! I'll get back to you as soon as possible.</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
                <p>Oops! Something went wrong. Please try again later.</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-bee-yellow/20 bg-bee-gray px-4 py-2 text-white focus:border-bee-yellow focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded border border-bee-yellow/20 bg-bee-gray px-4 py-2 text-white focus:border-bee-yellow focus:outline-none"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="mb-2 block text-white">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded border border-bee-yellow/20 bg-bee-gray px-4 py-2 text-white focus:border-bee-yellow focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded border border-bee-yellow/20 bg-bee-gray px-4 py-2 text-white focus:border-bee-yellow focus:outline-none"
                ></textarea>
              </div>
              <button type="submit" className="btn w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="-ml-1 mr-3 h-5 w-5 animate-spin text-bee-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
