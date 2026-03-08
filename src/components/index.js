// Only eagerly-needed components are exported from this barrel.
// Lazy-loaded sections (About, Experience, Tech, Works, Contact) are imported
// directly from their own files in App.jsx to keep the initial bundle small.
import Hero from "./Hero";
import Navbar from "./Navbar";
import CanvasLoader from "./Loader";

export { Hero, Navbar, CanvasLoader };
