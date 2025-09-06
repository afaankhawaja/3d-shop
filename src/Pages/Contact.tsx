import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmissionStatus("Sending...");
    setTimeout(() => {
      console.log("Form Data Submitted:", formData);
      setSubmissionStatus("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="bg-[#E4E0E1] min-h-screen py-20 px-4 sm:px-6 lg:px-8 font-sans text-[#493628]">
      <div className="max-w-6xl mx-auto rounded-3xl bg-[#D6C0B3]/40 backdrop-blur-sm p-8 md:p-12 shadow-2xl">
        <div className="md:grid md:grid-cols-2 md:gap-12 lg:gap-24 items-center">
          <div className="space-y-8 mb-12 md:mb-0">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[#493628] leading-tight">
                Get in Touch
              </h2>
              <p className="text-lg text-[#493628]/80">
                Have a question or need to chat about a project? We're here to
                help! Fill out the form or reach out via our contact details.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#AB886D]" />
                <span className="text-[#493628]/90">hello@example.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#AB886D]" />
                <span className="text-[#493628]/90">+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#AB886D]" />
                <span className="text-[#493628]/90">
                  123 Craft Lane, Artisansville, USA
                </span>
              </div>
            </div>

            <div className="flex space-x-6 pt-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#493628] hover:text-[#FD1D1D] transition-colors duration-200"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#493628] hover:text-[#4267B2] transition-colors duration-200"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-[#493628] hover:text-[#1DA1F2] transition-colors duration-200"
              >
                <Twitter className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div className="bg-[#D6C0B3] rounded-3xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#493628]"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-1 rounded-lg border-none bg-[#E4E0E1] text-[#493628] focus:outline-[#AB886D]  transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#493628]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-1 rounded-lg border-none bg-[#E4E0E1] text-[#493628] focus:outline-[#AB886D] transition-colors"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#493628]"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-1 rounded-lg border-none bg-[#E4E0E1] text-[#493628] focus:outline-[#AB886D] transition-colors"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#493628] text-[#E4E0E1] font-semibold hover:bg-[#AB886D] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#AB886D]"
                >
                  Send Message
                </button>
              </div>

              {submissionStatus && (
                <div className="mt-4 text-center text-[#493628] font-medium">
                  {submissionStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
