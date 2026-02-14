import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import ConversationForm from "./ConversationForm";
import { createContact } from "../services/contactApi";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContact(formData);
      setFormData({
        name: "",
        company: "",
        email: "",
        contact: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to submit footer contact form:", error);
    }
  };

  const formFields = [
    {
      name: "name",
      placeholder: "Full Name",
      required: true,
    },
    {
      name: "company",
      placeholder: "Company Name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email Address",
      required: true,
    },
    {
      name: "contact",
      type: "tel",
      placeholder: "Contact Number",
    },
    {
      name: "message",
      type: "textarea",
      placeholder: "Your Message",
      rows: 4,
      required: true,
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#719CFF] to-[#A872FF]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-white/90 mb-8 max-w-md leading-relaxed">
              We deliver top-notch services from Website Development, Social
              Media Management, and Content Creation to Resume Building.
            </p>

            <div className="flex gap-4 mb-12">
              <a
                href="https://www.facebook.com/profile.php?id=61577879636447"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors text-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/unlockdiscounts"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/unlockdigiservices"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/UD_digiservices"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors text-white"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-12 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/articles"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Services
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/services/website-development"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Website Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/social-media-management"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Social Media Management
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/resume-building"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Resume Building
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <ConversationForm
              variant="footer"
              fields={formFields}
              values={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © Copyright 2025 Unlock Digi Services. All Rights Reserved
          </p>

          <div className="flex gap-8 mt-4 md:mt-0">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
