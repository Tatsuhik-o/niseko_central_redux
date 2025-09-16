import { createContext } from "react";
import type { TTheme } from "../utils/types";

interface NisekoThemeContextProps {
  currentTheme: TTheme;
  changeTheme: () => void;
}

export const NisekoThemeContext = createContext<
  NisekoThemeContextProps | undefined
>(undefined);
