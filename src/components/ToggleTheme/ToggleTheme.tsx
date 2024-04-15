import { useContext } from "react";
import ThemeContext from "@/context/themeContext";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export const ToggleTheme = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return darkTheme ? (
    <MdOutlineLightMode
      className="cursor-pointer"
      onClick={() => {
        setDarkTheme(false);
        localStorage.removeItem("hotel-theme");
      }}
    />
  ) : (
    <MdDarkMode
      className="cursor-pointer"
      onClick={() => {
        setDarkTheme(true);
        localStorage.setItem("hotel-theme", "true");
      }}
    />
  );
};
