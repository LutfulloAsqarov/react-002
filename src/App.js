import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Features />
            <About />
            <Menu />
        </div>
    );
}

export default App;
