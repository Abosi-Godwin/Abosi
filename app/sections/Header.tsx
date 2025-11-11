import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
const Header = () => {
  return (
    <header
      className="relative h-dvh min-h-dvh"
    >
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
