import { lightPalette, darkPalette } from "../utils/mui_settings";
import { possibleThemes } from "../utils/constants";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createTheme, type Theme } from "@mui/material";
import type { TTheme } from "../utils/types";

interface UseThemeProps {
  cooldown?: number;
}

interface UseThemeReturn {
  changeTheme: () => void;
  NisekoTheme: Theme;
  currentTheme: TTheme;
}

const getInitialTheme = (): TTheme => {
  try {
    const localTheme = localStorage.getItem("theme");
    if (localTheme && possibleThemes.includes(localTheme))
      return localTheme as "light" | "dark";
    const mediaTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (mediaTheme) return "dark";
    return "light";
  } catch (err) {
    console.warn("Failed Setting Initial Theme, defaulting to light...");
    return "light";
  }
};

export default function useTheme({
  cooldown = 500,
}: UseThemeProps): UseThemeReturn {
  const [currentTheme, setCurrentTheme] = useState<TTheme>(getInitialTheme);
  const isInCooldown = useRef<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem("theme", currentTheme);
    } catch (err) {
      console.warn("Failed to save theme to local storage...");
    }
  }, [currentTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      setCurrentTheme(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const changeTheme = useCallback(() => {
    if (isInCooldown.current) return;
    isInCooldown.current = true;
    setCurrentTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
    setTimeout(() => {
      isInCooldown.current = false;
    }, cooldown);
  }, [cooldown]);

  const NisekoTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: currentTheme,
          ...(currentTheme === "dark" ? darkPalette : lightPalette),
        },
        components: {
          MuiTypography: {
            styleOverrides: {
              root: {
                fontFamily: "Roboto",
              },
              h5: {
                fontFamily: "Playfair Display",
                fontWeight: "bold",
              },
              h6: {
                fontFamily: "Playfair Display",
                fontWeight: "bold",
              },
              body1: {
                fontFamily: "Inter",
                fontWeight: "normal",
              },
              body2: {
                fontFamily: "Inter",
                fontWeight: "normal",
              },
              subtitle1: {
                fontFamily: "Poppins",
                fontWeight: "500",
              },
              subtitle2: {
                fontFamily: "Poppins",
                fontWeight: "500",
              },
            },
          },
        },
      }),
    [currentTheme]
  );

  return { NisekoTheme, changeTheme, currentTheme };
}
