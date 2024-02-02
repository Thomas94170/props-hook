import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-around p-4 bg-gray-700 text-white">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
        >
          Home
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
        >
          Blog
        </NavLink>

        <NavLink
          to="/messages"
          className={({ isActive }) => (isActive ? "activeLink" : undefined)}
        >
          Ajouter un article
        </NavLink>
      </nav>
    </>
  );
}
