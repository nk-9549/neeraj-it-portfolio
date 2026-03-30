/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-secondary/30">
      <Navbar />
      <Sidebar />
      
      <main className="md:ml-20">
        <section id="hero">
          <Hero />
        </section>
        <Metrics />
        <section id="sectors">
          <Skills />
        </section>
        <section id="operations">
          <Projects />
        </section>
        <section id="arsenal">
          <Tools />
        </section>
        <section id="chronicle">
          <Timeline />
        </section>
        <section id="terminal">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}
