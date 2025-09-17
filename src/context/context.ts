import { createContext } from "react";
import type { TTheme } from "../utils/types";

interface NisekoThemeContextProps {
  currentTheme: TTheme;
  changeTheme: () => void;
}

const initialValue: NisekoThemeContextProps = {
  currentTheme: "light",
  changeTheme: () => {},
};

export const NisekoThemeContext =
  createContext<NisekoThemeContextProps>(initialValue);
