import { LinkedinSvg, GithubSvg, FacebookSvg } from "../assets/svg/Svgs";
import { useState } from "react";
import { BsListNested } from "react-icons/bs";
function Header({ isSmall }) {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "#main",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const socialLinks = [
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/pola-mounir-samir-7954b92b6/",
      component: (hovered) => <LinkedinSvg hovered={hovered} />,
    },
    {
      name: "github",
      href: "https://github.com/polamounir103",
      component: (hovered) => <GithubSvg hovered={hovered} />,
    },
    {
      name: "facebook",
      href: "https://www.facebook.com/pola.mounir.1103",
      component: (hovered) => <FacebookSvg hovered={hovered} />,
    },
  ];
  const showHeader = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };

  return (
    <>
      <header
        className={`flex flex-col gap-10 justify-center items-center bg-neutral-900 text-white ${
          isSmall ? "sm" : "lg"
        } ${isHeaderOpen && "show"}`}
      >
        <div className="w-full flex flex-col items-center">
          <h2 className="logo">Pola</h2>
          <div>
            <ul className="flex gap-4">
              {socialLinks.map((link, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredIcon(link.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    aria-label={`${link.name} link`}
                  >
                    {link.component(hoveredIcon === link.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <nav className="flex w-full justify-between self-center justify-self-center text-xl ">
            <ul className="flex flex-col items-center w-full gap-5">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className=" font-semibold text-white hover:text-gray-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={`${!isSmall && "hidden"} fixed left-full top-10`}>
          <button
            className="text-gray-900 bg-slate-200 p-2 rounded-lg text-2xl"
            onClick={showHeader}
            name="header-toggler"
            id="headerToggler"
            title="Header toggler"
          >
            <BsListNested />
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
