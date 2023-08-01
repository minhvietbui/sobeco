// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    theme: {
      extend: {
        height: {
          "128": "32rem",
        },
      },
    },
  },
});
