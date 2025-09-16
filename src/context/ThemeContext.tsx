import { createContext } from "react";
import useTheme from "../hooks/useTheme";
import type { Theme } from "@mui/material";
import type { TTheme } from "../utils/types";

interface ThemeContextProps {
  children: React.ReactNode;
}

interface NisekoThemeContextProps {
  NisekoTheme: Theme;
  currentTheme: TTheme;
  changeTheme: () => void;
}

export default function ThemeContext({ children }: ThemeContextProps) {
  const { NisekoTheme, currentTheme, changeTheme } = useTheme({});
  const NisekoThemeContext = createContext<NisekoThemeContextProps | undefined>(
    undefined
  );
  return (
    <NisekoThemeContext.Provider
      value={{ NisekoTheme, currentTheme, changeTheme }}
    >
      {children}
    </NisekoThemeContext.Provider>
  );
}
