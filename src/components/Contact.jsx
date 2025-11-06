import { useState } from "react";
import emailjs from "@emailjs/browser";
import Icon from "./ui/Icon";
import Spinner from "./ui/Spinner";

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
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-bee-yellow/20 p-3 text-bee-yellow">
                  <Icon icon="mdi:email-outline" width={24} className="h-6 w-6" />
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

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-bee-yellow/20 p-3 text-bee-yellow">
                  <Icon icon="mdi:phone-outline" width={24} className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium text-white">Phone</h4>
                  <a
                    href="tel:+94762526128"
                    className="text-gray-300 transition-colors hover:text-bee-yellow"
                  >
                    +94 76 252 6128
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-bee-yellow/20 p-3 text-bee-yellow">
                  <Icon icon="mdi:map-marker-outline" width={24} className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium text-white">Location</h4>
                  <p className="text-gray-300">Available for Remote Work Worldwide</p>
                </div>
              </div>

              {/* Work Status */}
              <div className="flex items-start space-x-4">
                <div className="rounded-lg bg-bee-yellow/20 p-3 text-bee-yellow">
                  <Icon icon="mdi:briefcase-outline" width={24} className="h-6 w-6" />
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
                <Icon icon="mdi:github" width={24} className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/zafar-m3n/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-bee-gray p-3 text-white transition-all duration-300 hover:bg-bee-yellow hover:text-bee-black"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" width={24} className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/zafar.m3n/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-bee-gray p-3 text-white transition-all duration-300 hover:bg-bee-yellow hover:text-bee-black"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" width={24} className="h-6 w-6" />
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
                {isSubmitting ? <Spinner /> : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
