/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        merge1: {
          "0%": { transofrm: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
          "100%": { transform: "rotate(225deg)" },
        },
        merge3: {
          "0%": { transofrm: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "rotate(-225deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
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
        bgBannerDesktop: "url('../img/banner_desktop.webp')",
      },
    },
  },
  plugins: [],
};

