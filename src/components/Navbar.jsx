import { useState } from "react";
import logo from "../img/logo.svg"

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const styles = `
    ${
      modalOpen ? "flex" : "hidden"
    } backdrop-blur-sm fixed top-0 right-0 h-full w-[250px] z-40 bg-white text-black flex-col space-y-4 items-center pt-12
  `;

  return (
    <header className="navbar">
      <nav className="text-black bg-transparent">
        <ul  className="flex justify-end place-items-center items-center gap-12 py-4 w-[75%] mx-auto">
          <li className="mr-auto">
            <a
              className="hover:text-blue-800 text-red-600 font-bold text-lg"
              href="#home"
            >
              <img src={logo} alt="" />
            </a>
          </li>
          <li className="hidden sm:inline-block listed">
            <a className="hover:text-blue" href="">
              Home
            </a>
          </li>
          <li className="hidden sm:inline-block listed">
            <a className="hover:text-blue" href="">
              New
            </a>
          </li>
          <li className="hidden sm:inline-block listed">
            <a className="hover:text-blue" href="">
              Trending
            </a>
          </li>
          <li className="hidden sm:inline-block listed">
            <a className="hover:text-blue" href="">
              Categories
            </a>
          </li>

          <li
            id="hamburger"
            className="hover:text-blue sm:hidden pr-4 text-xl cursor-pointer"
            onClick={() => setModalOpen(!modalOpen)}
          >
            &#9776;
          </li>
        </ul>

        {/* Mobile menu */}
        <ul className={styles}>
          <li className="w-full hover:bg-gray-200 py-3 pl-8">
            <button
              className="hover:text-blue text-3xl w-full text-left"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
          </li>
          <li
            onClick={() => setModalOpen(false)}
            className="w-full hover:bg-gray-200 py-3 pl-8"
          >
            <a className="hover:text-blue" href="">
              Home
            </a>
          </li>
          <li
            onClick={() => setModalOpen(false)}
            className="w-full hover:bg-gray-200 py-3 pl-8"
          >
            <a className="hover:text-blue" href="">
              New
            </a>
          </li>
          <li
            onClick={() => setModalOpen(false)}
            className="w-full hover:bg-gray-200 py-3 pl-8"
          >
            <a className="hover:text-blue" href="">
              Popular
            </a>
          </li>
          <li
            onClick={() => setModalOpen(false)}
            className="w-full hover:bg-gray-200 py-3 pl-8"
          >
            <a className="hover:text-blue" href="">
              Trending
            </a>
          </li>
          <li
            onClick={() => setModalOpen(false)}
            className="w-full hover:bg-gray-200 py-3 pl-8"
          >
            <a className="hover:text-blue" href="">
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
