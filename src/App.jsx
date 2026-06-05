import useSmoothScroll from "./useSmoothScroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Categories from "./components/Categories";
import AthletePerformance from "./components/AthletePerformance";
import StoreExperience from "./components/StoreExperience";
import Offers from "./components/Offers";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function App() {
  useSmoothScroll();

  return (
    <>
      <Header />

      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="why"><WhyChooseUs /></section>
      <section id="categories"><Categories /></section>
      <section id="athlete"><AthletePerformance /></section>
      <section id="store"><StoreExperience /></section>
      <section id="offers"><Offers /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}