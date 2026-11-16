import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero } from "./components";
import Footer from "./components/Footer";
import ParallaxBackdrop from "./components/ParallaxBackdrop";

const Stats = lazy(() => import("./components/Stats"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <ParallaxBackdrop />
        <div className="relative z-[1] bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <div className="relative z-[1]">
          <Suspense fallback={null}>
            <Stats />
          </Suspense>
          <Suspense fallback={null}>
            <About />
          </Suspense>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
          <Suspense fallback={null}>
            <Tech />
          </Suspense>
          <Suspense fallback={null}>
            <Works />
          </Suspense>
          <Suspense fallback={null}>
            <Testimonials />
          </Suspense>
        </div>

        <div className="relative z-[1]">
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>

        <div className="relative z-[1]">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
