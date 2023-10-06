// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/supabase',
    '@nuxt/image',
  ],
  tailwindcss: {
    theme: {
      extend: {
        height: {
          '128': '32rem',
        },
      },
    },
  },
  buildModules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
      'Edu+SA+Beginner': {
        wght: [600],
      },
      Quicksand: {
        wght: [300, 400, 500, 600, 700],
        display: 'swap',
      },
    },
  },
  content: ['node_modules/flowbite/**/*.{js,jsx,ts,tsx}'],
  supabase: {
    redirect: true,
    redirectOptions: {
      login: '/auth/login',
      callback: '/admin/products',
      exclude: ['/', '/sanpham', '/lienhe', '/gioithieu', '/auth/signup'],
    },
    clientOptions: {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true,
      },
    },
  },
  runtimeConfig: {
    user: ['vietbm9@gmail.com','mgcpain@gmail.com'],
  },
  image: {
    providers: {
      customProvider: {
        name: 'supabase',
        provider: './providers/supabase',
      },
    },
  },
});
