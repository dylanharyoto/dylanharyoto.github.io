// src/constants/theme.js
export const theme = {
    colors: {
      white: "#fff",
      black: "#000",
      primary: "#34fb7b", // Green color used throughout
      darkBg: "#0c1c24", // Dark background color
      navBg: "#212121", // Navigation background
      gradientDark: "rgba(4, 12, 20, 1)", // Gradient color
      gradientDarker: "rgba(12, 28, 36, 1)", // Another gradient color
    },
    fonts: {
      primary: "'Rubik', sans-serif",
    },
    fontSizes: {
      p: "1.25rem",
      h1: "5rem",
      h2: "3rem",
      h3: "2.5rem",
      h4: "2.25rem",
      h5: "1.75rem",
      h6: "1.5rem",
    },
    breakpoints: {
      mobile: "768px",
      large: "1500px",
    },
  };
  
  export const mediaQueries = {
    mobile: `@media (max-width: ${theme.breakpoints.mobile})`,
    large: `@media (min-width: ${theme.breakpoints.large})`,
  };