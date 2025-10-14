import { useTheme } from "@/hooks/useTheme";
import "./ThemeToggle.scss";
import { MoonIcon, SunIcon } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Mudar para tema ${theme === "dark" ? "claro" : "escuro"}`}
    >
      <div className="theme-toggle__track">
        <div className="theme-toggle__thumb">
          {theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </div>
      </div>
    </button>
  );
};
