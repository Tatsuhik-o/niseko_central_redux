import type {
  PaletteOptions,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    hybrid?: PaletteColor;
    highlight?: PaletteColor;
  }
  interface PaletteOptions {
    hybrid?: PaletteColorOptions;
    highlight?: PaletteColorOptions;
  }
}

export const lightPalette: PaletteOptions = {
  primary: {
    main: "#F06549",
    contrastText: "#FEFFFF",
  },
  secondary: {
    main: "#FFFFFF",
    contrastText: "#1F2937",
  },
  hybrid: {
    main: "#E2E8F0",
    contrastText: "#1F2937",
  },
  highlight: {
    main: "#F9FAFB",
  },
  divider: "#D1D5DB",
  info: {
    main: "#1F2937",
    contrastText: "#FFFFFF",
  },
  error: {
    main: "#E53E3E",
    contrastText: "#FFFFFF",
  },
  success: {
    main: "#1EA659",
    contrastText: "#FFFFFF",
  },
};

export const darkPalette: PaletteOptions = {
  primary: {
    main: "#F48C78",
    contrastText: "#1F2937",
  },
  secondary: {
    main: "#1F2937",
    contrastText: "#FEFFFF",
  },
  hybrid: {
    main: "#374151",
    contrastText: "#E5E7EB",
  },
  highlight: {
    main: "#111827",
  },
  divider: "#4B5563",
  info: {
    main: "#93C5FD",
    contrastText: "#1F2937",
  },
  error: {
    main: "#F87171",
    contrastText: "#1F2937",
  },
  success: {
    main: "#34D399",
    contrastText: "#1F2937",
  },
};
