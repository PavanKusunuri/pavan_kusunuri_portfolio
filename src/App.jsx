import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero } from "./components";
import Footer from "./components/Footer";

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
        {/* Above-the-fold */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Stats counter — between hero and about */}
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

        {/* Testimonials — between works and contact */}
        <Suspense fallback={null}>
          <Testimonials />
        </Suspense>

        <div className="relative z-0">
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
