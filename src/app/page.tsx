import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Populares from "@/components/Populares";
import Comentarios from "@/components/Comentarios";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Populares />
      <Comentarios />
      <Footer />
    </main>
  );
}
