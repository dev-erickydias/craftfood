import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Populares from "@/components/Populares";
import Galeria from "@/components/Galeria";
import Chef from "@/components/Chef";
import Comentarios from "@/components/Comentarios";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Populares />
      <Galeria />
      <Chef />
      <Comentarios />
      <Newsletter />
      <Footer />
    </main>
  );
}
