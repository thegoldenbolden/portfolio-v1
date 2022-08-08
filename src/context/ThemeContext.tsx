import { createContext, useState } from "react";

export const ThemeContext = createContext({ toggle: () => {}, theme: "dark" });

export function ThemeProvider({ children }) {
 const [theme, setTheme] = useState("dark");
 const toggle = () => setTheme((p) => (p == "dark" ? "light" : "dark"));

 return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}
export default ThemeProvider;
