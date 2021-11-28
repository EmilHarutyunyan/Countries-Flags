import { useState, useEffect } from "react";

function useTheme() {
  const [theme, setTheme] = useState("ligth");

  const toogleTheme = () => {
    if (theme !== "dark") {

      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "ligth");
      setTheme("ligth");
    }
  };
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);
  return {
    theme,
    toogleTheme
  };
}
export default useTheme;
