import { Nav } from "./components/apex/Nav";
import { Hero } from "./components/apex/Hero";
import { Services } from "./components/apex/Services";
import { MetalsGallery } from "./components/apex/MetalsGallery";
import { Process } from "./components/apex/Process";
import { QuoteForm } from "./components/apex/QuoteForm";
import { About } from "./components/apex/About";
import { Testimonials } from "./components/apex/Testimonials";
import { FinalCTA } from "./components/apex/FinalCTA";
import { Footer } from "./components/apex/Footer";

export default function App() {
  return (
    <div
      style={{
        background: "#FAFAFA",
        color: "#111418",
        fontFamily:
          "'Inter', 'Helvetica Neue', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        minHeight: "100vh",
      }}
    >
      <Nav />
      <Hero />
      <Services />
      <MetalsGallery />
      <Process />
      <QuoteForm />
      <About />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
