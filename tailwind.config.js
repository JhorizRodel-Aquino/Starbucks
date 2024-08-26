/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bgYellow: {
          "0%, 100%": { background: "transparent" },
          "50%": { background: "#FACD46" },
        },
        bgYellow2: {
          "0%, 100%": { background: "transparent" },
          "50%": { background: "#FACD46" },
        },
      },

      fontFamily: {
        siliguri: "Hind Siliguri",
      },

      colors: {
        primary: "#00754A",
        secondary: "#D4E9E2",
        tertiary: "#F2F0EB",
        headerr: "#1E3932",
      },

      backgroundImage: {
        bgBanner: "url('../img/banner_mobile.webp')",
        bgBannerDesktop: "url('../img/banner_desktop.png')",
      },
    },
  },
  plugins: [],
};

