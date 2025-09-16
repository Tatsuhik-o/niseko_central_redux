import useTheme from "../hooks/useTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { NisekoThemeContext } from "./context";

interface ThemeContextProps {
  children: React.ReactNode;
}

export default function ThemeContext({ children }: ThemeContextProps) {
  const { NisekoTheme, currentTheme, changeTheme } = useTheme({});
  return (
    <ThemeProvider theme={NisekoTheme}>
      <CssBaseline />
      <NisekoThemeContext.Provider value={{ currentTheme, changeTheme }}>
        {children}
      </NisekoThemeContext.Provider>
    </ThemeProvider>
  );
}
