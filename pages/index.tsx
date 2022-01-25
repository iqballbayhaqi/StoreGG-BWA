import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/MainBanner";
import TransactionStep from "../components/organisms/TransactionStep";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import Footer from "../components/organisms/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section>
        <Navbar />
      </section>

      <section className="header pt-lg-60 pb-50">
        <MainBanner />
      </section>

      <section id="feature" className="feature pt-50 pb-50">
        <TransactionStep />
      </section>

      <section className="featured-game pt-50 pb-50">
        <FeaturedGame />
      </section>

      <section className="reached pt-50 pb-50">
        <Reached />
      </section>

      <section className="story pt-50 pb-50">
        <Story />
      </section>

      <section className="footer pt-50">
        <Footer />
      </section>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossOrigin="anonymous"
      />

      <script>AOS.init();</script>
    </>
  );
}
