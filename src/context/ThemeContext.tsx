import { createContext } from "react";
import useTheme from "../hooks/useTheme";
import type { TTheme } from "../utils/types";
import { CssBaseline, ThemeProvider } from "@mui/material";

interface ThemeContextProps {
  children: React.ReactNode;
}

interface NisekoThemeContextProps {
  currentTheme: TTheme;
  changeTheme: () => void;
}

export default function ThemeContext({ children }: ThemeContextProps) {
  const { NisekoTheme, currentTheme, changeTheme } = useTheme({});
  const NisekoThemeContext = createContext<NisekoThemeContextProps | undefined>(
    undefined
  );
  return (
    <ThemeProvider theme={NisekoTheme}>
      <CssBaseline />
      <NisekoThemeContext.Provider value={{ currentTheme, changeTheme }}>
        {children}
      </NisekoThemeContext.Provider>
    </ThemeProvider>
  );
}
