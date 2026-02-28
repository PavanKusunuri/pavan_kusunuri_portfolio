import React, { useRef, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { downloadResume } from "../utils/resumeDownload";

const EarthCanvas = lazy(() =>
  import("./canvas").then((mod) => ({ default: mod.EarthCanvas })),
);

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
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 0.8)}
        className="flex-[0.75] rounded-2xl p-8 sm:p-10"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} mt-1`}>Contact.</h3>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="text-4xl mb-4">👋</div>
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
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[300px]"
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
