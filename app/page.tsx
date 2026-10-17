import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-ink px-5 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <SelectedWork />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
