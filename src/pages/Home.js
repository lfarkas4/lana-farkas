import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { useResetScroll } from "../utils/useResetScroll";

const Home = ({ isLoading }) => {
  useResetScroll();
  
  // Don't render content while loading
  if (isLoading) {
    return null;
  }
  
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
};

export default Home;