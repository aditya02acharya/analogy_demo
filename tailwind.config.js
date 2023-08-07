const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const aspectRatio = require("@tailwindcss/aspect-ratio");

// Hex To RGB
const hexToRGB = (h) => {
  let r = 0,
    g = 0,
    b = 0;

  // 3 Digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

    // 6 6igits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }

  return +r + " " + +g + " " + +b;
};

// With Opacity Value
const withOpacityValue = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      heading: ["var(--font-heading)", ...defaultTheme.fontFamily.sans],
      body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
    },
    skin: {
      white: hexToRGB(colors.white),
      sky: {
        DEFAULT: hexToRGB(colors.sky[600]),
        50: hexToRGB(colors.sky[50]),
        100: hexToRGB(colors.sky[100]),
        200: hexToRGB(colors.sky[200]),
        300: hexToRGB(colors.sky[300]),
        400: hexToRGB(colors.sky[400]),
        500: hexToRGB(colors.sky[500]),
        600: hexToRGB(colors.sky[600]),
        700: hexToRGB(colors.sky[700]),
        800: hexToRGB(colors.sky[800]),
        900: hexToRGB(colors.sky[900]),
      },
      gray: {
        50: hexToRGB(colors.gray[50]),
        100: hexToRGB(colors.gray[100]),
        200: hexToRGB(colors.gray[200]),
        300: hexToRGB(colors.gray[300]),
        400: hexToRGB(colors.gray[400]),
        500: hexToRGB(colors.gray[500]),
        600: hexToRGB(colors.gray[600]),
        700: hexToRGB(colors.gray[700]),
        800: hexToRGB(colors.gray[800]),
        900: hexToRGB(colors.gray[900]),
      },
      slate: {
        50: hexToRGB(colors.slate[50]),
        100: hexToRGB(colors.slate[100]),
        200: hexToRGB(colors.slate[200]),
        300: hexToRGB(colors.slate[300]),
        400: hexToRGB(colors.slate[400]),
        500: hexToRGB(colors.slate[500]),
        600: hexToRGB(colors.slate[600]),
        700: hexToRGB(colors.slate[700]),
        800: hexToRGB(colors.slate[800]),
        900: hexToRGB(colors.slate[900]),
      },
      secondary: {
        DEFAULT: hexToRGB(colors.gray[600]),
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: {
        50: withOpacityValue("--color-gray-50"),
        100: withOpacityValue("--color-gray-100"),
        200: withOpacityValue("--color-gray-200"),
        300: withOpacityValue("--color-gray-300"),
        400: withOpacityValue("--color-gray-400"),
        500: withOpacityValue("--color-gray-500"),
        600: withOpacityValue("--color-gray-600"),
        700: withOpacityValue("--color-gray-700"),
        800: withOpacityValue("--color-gray-800"),
        900: withOpacityValue("--color-gray-900"),
      },
      primary: {
        DEFAULT: withOpacityValue("--color-primary"),
        50: withOpacityValue("--color-primary-50"),
        100: withOpacityValue("--color-primary-100"),
        200: withOpacityValue("--color-primary-200"),
        300: withOpacityValue("--color-primary-300"),
        400: withOpacityValue("--color-primary-400"),
        500: withOpacityValue("--color-primary-500"),
        600: withOpacityValue("--color-primary-600"),
        700: withOpacityValue("--color-primary-700"),
        800: withOpacityValue("--color-primary-800"),
        900: withOpacityValue("--color-primary-900"),
      },
      secondary: withOpacityValue("--color-secondary"),
    },
    extend: {
      fontSize: {
        "4xl": "2rem",
        "line-height": "3rem",
      },
      borderRadius: {
        xl: "10px",
      },
      boxShadow: {
        DEFAULT: "1px 1px 5px 0 rgba(0, 0, 0, 0.16)",
      },
      colors: {
        success: "#28a745",
        danger: "#dc3545",
        warning: "#ffc107",
        info: "#17a2b8",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      backgroundColor: {
        background: withOpacityValue("--color-background"),
        foreground: withOpacityValue("--color-foreground"),
        input: withOpacityValue("--color-input"),
      },
      borderColor: {
        divider: withOpacityValue("--color-divider"),
        border: withOpacityValue("--color-border"),
      },
      textColor: {
        normal: withOpacityValue("--color-text-normal"),
        muted: withOpacityValue("--color-text-muted"),
        highlighted: withOpacityValue("--color-text-highlighted"),
        placeholder: withOpacityValue("--color-text-placeholder"),
        component: withOpacityValue("--color-text-component"),
      },
    },
  },
  plugins: [aspectRatio],
};