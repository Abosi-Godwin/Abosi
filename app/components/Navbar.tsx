import Logo from "./Logo";
import Navlinks from "./Navlinks";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-dfark/30 border-b border-primary/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-3 md:px-10 py-4">
        <Logo />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
