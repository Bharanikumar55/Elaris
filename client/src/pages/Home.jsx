import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import FeaturedPlaces from "../components/FeaturedPlaces";
import WhyElaris from "../components/WhyElaris";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Categories />
      <FeaturedPlaces />
      <WhyElaris />
      <Footer />
    </>
  );
}

export default Home;