import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { useResetScroll } from "../utils/useResetScroll";

const Home = () => {
    useResetScroll();
    return (
        <>
        <Hero />
        <Projects />
        </>
    )
}

export default Home;