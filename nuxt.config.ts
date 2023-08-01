// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  tailwindcss: {
    theme: {
      extend: {
        height: {
          "128": "32rem",
        },
      },
    },
  },
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      'Edu+SA+Beginner': {
        wght: [600]
      },
      Quicksand: {
        wght: [300, 400, 500, 600, 700],
        display: 'swap'
      }
    }
  }
});
