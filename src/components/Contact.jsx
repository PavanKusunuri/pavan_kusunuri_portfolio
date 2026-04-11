import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { downloadResume } from "../utils/resumeDownload";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Pavan Kusunuri",
          from_email: form.email,
          to_email: "pavantejakusunuri@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="w-full flex justify-center">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 0.8)}
        className="w-full max-w-2xl rounded-2xl p-6 sm:p-8 lg:p-10"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(16px)",
        }}
      >
        {/* 🔥 HEADER (REWRITTEN FOR IMPACT) */}
        <p className={styles.sectionSubText}>Open to Opportunities</p>

        <h3 className={`${styles.sectionHeadText} mt-1`}>
          Let’s Build Something Scalable Together
        </h3>

        <p className="text-white/50 text-[14px] mt-3 max-w-lg leading-relaxed">
          I’m currently open to <span className="text-white font-medium">Senior Full-Stack Engineer</span> roles where I can contribute to scalable systems, performance optimization, and production-grade applications.
        </p>

        {/* 🔥 AVAILABILITY */}
        <div
          className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(16,185,129,0.08)",
            border: "1px solid rgba(16,185,129,0.2)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
          <span className="text-[#10b981] text-[12px] font-medium">
            Actively open to full-time roles • Immediate joiner
          </span>
        </div>

        {/* 🔥 DIRECT CONTACT */}
        <div className="mt-4 text-[13px] text-white/50">
          📧 pavantejakusunuri@gmail.com
        </div>

        {/* 🔥 SOCIAL LINKS */}
        <div className="flex items-center gap-3 mt-3 mb-6">
          <a
            href="https://www.linkedin.com/in/pavan-kusunuri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white text-[13px]"
          >
            LinkedIn
          </a>
          <span className="text-white/10">|</span>
          <a
            href="https://github.com/PavanKusunuri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white text-[13px]"
          >
            GitHub
          </a>
        </div>

        {/* 🔥 SUCCESS STATE */}
        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 text-center"
          >
            <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#10b981]/10 border border-[#10b981]/30">
              ✓
            </div>

            <h4 className="text-white text-[20px] font-semibold mb-2">
              Message Sent Successfully
            </h4>

            <p className="text-white/50 text-[14px]">
              Thanks for reaching out. I usually respond within 24 hours.
            </p>

            <button
              onClick={() => setSent(false)}
              className="mt-6 apple-btn glass px-6 py-2"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          /* 🔥 FORM */
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-6"
          >
            <label className="flex flex-col gap-2">
              <span className="text-white/60 text-[12px] uppercase">
                Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="apple-input"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-white/60 text-[12px] uppercase">
                Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="apple-input"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-white/60 text-[12px] uppercase">
                Message
              </span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell me about the role or opportunity..."
                className="apple-input resize-none"
              />
            </label>

            {/* 🔥 CTA */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="apple-btn apple-btn-primary px-8 py-3 text-[15px]"
              >
                {loading ? "Sending..." : "Start a Conversation"}
              </button>

              <button
                type="button"
                onClick={downloadResume}
                className="apple-btn glass px-6 py-3 text-[14px]"
              >
                ⬇ Download Resume
              </button>
            </div>

            {/* 🔥 TRUST SIGNAL */}
            <p className="text-white/30 text-[11px] mt-3">
              Experience in enterprise systems (Oracle Cerner, ValueLabs)
            </p>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");