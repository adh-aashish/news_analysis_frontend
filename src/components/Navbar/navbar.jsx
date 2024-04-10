import "./navbar.css";
import InputForm from "../../components/InputForm/inputform";
import Logo from "../../components/Logo/logo";
import Hamburger from "../Hamburger/hamburger";

const Navbar = () => {
  return (
    <header className="heading">
      <div className="heading_items">
        <Logo />
        <InputForm />
        {/* <MdSettings className="setting_logo" /> */}
        <Hamburger />
      </div>
    </header>
  );
};

export default Navbar;
