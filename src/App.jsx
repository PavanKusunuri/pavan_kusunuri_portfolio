import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

// Navbar and Hero are above-the-fold – kept eager so they paint immediately.
import { Navbar, Hero } from "./components";

// All below-the-fold sections are lazy-loaded so the browser can parse and
// execute their JS only when needed, reducing the initial bundle evaluation cost.
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));

// Heavy 3D star field lazy-loaded separately so Three.js
// doesn't block the hero render.
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Above-the-fold: loaded eagerly so first paint is instant */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Below-the-fold sections: each wrapped in its own Suspense so
            one slow section never blocks the others from rendering. */}
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

        <div className="relative z-0">
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
