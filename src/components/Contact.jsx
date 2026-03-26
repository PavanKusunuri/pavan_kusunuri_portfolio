import React, { useRef, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { downloadResume } from "../utils/resumeDownload";

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
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
    // Layout switches to side-by-side at lg (1024px) instead of xl (1280px).
    // Previously the Earth globe was stacked above the form on tablets all
    // the way up to 1279px, needlessly dominating vertical screen space.
    <div className="lg:mt-12 flex lg:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 0.8)}
        className="lg:flex-[0.75] w-full rounded-2xl p-6 sm:p-8 lg:p-10"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} mt-1`}>Contact.</h3>

        {/* Availability banner */}
        <div
          className="mt-4 mb-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
          </span>
          <span className="text-[#10b981] text-[12px] font-medium">Available for full-time opportunities</span>
        </div>

        {/* LinkedIn + GitHub quick links */}
        <div className="flex items-center gap-3 mt-3 mb-6">
          <a
            href="https://www.linkedin.com/in/pavan-kusunuri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[rgba(255,255,255,0.5)] hover:text-white text-[13px] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
          <span className="text-white/10">|</span>
          <a
            href="https://github.com/PavanKusunuri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[rgba(255,255,255,0.5)] hover:text-white text-[13px] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            GitHub
          </a>
        </div>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <div
              className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h4 className="text-white text-[20px] font-semibold tracking-tight mb-2">
              Message Sent!
            </h4>
            <p className="text-[rgba(255,255,255,0.5)] text-[14px]">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 apple-btn glass text-white px-6 py-2 text-[14px]"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-6"
          >
            <label className="flex flex-col gap-2">
              <span className="text-[rgba(255,255,255,0.6)] text-[12px] font-semibold tracking-[0.12em] uppercase">
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
              <span className="text-[rgba(255,255,255,0.6)] text-[12px] font-semibold tracking-[0.12em] uppercase">
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
              <span className="text-[rgba(255,255,255,0.6)] text-[12px] font-semibold tracking-[0.12em] uppercase">
                Message
              </span>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="What would you like to discuss?"
                className="apple-input resize-none"
              />
            </label>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="apple-btn apple-btn-primary px-8 py-3 text-[15px] disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send Message"}
              </button>
              <button
                type="button"
                onClick={downloadResume}
                className="apple-btn glass text-white px-6 py-3 text-[14px]"
              >
                ⬇ Download Resume
              </button>
            </div>
          </form>
        )}
      </motion.div>

      {/* Earth */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 0.8)}
        className="lg:flex-1 lg:h-auto md:h-[420px] h-[280px]"
      >
        <Suspense
          fallback={
            <div className="w-full h-full rounded-2xl glass animate-pulse" />
          }
        >
          <EarthCanvas />
        </Suspense>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
