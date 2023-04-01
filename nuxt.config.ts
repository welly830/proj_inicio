// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@vite-pwa/nuxt"
  ],
  pwa: {
    manifest: {
      name: "Nuxt3 PWA",
      short_name: "Nuxt3 PWa",
      description: "Testing PWA",
      icons: [
        {
            src: "icons/favicon_144x144.png",
            sizes: "144x144",
            type: "image/png"
        },
        {
            src: "icons/favicon_192x192.png",
            sizes: "192x192",
            type: "image/png"
        },
        {
            src: "icons/logo_16x16.png",
            sizes: "16x16",
            type: "image/png",
            
        },
        {
            src: "icons/logo_32x32.png",
            sizes: "32x32",
            type: "image/png",
            
        },
        {
            src: "icons/gm_video_youtube_white_48dp.png",
            type: "image/png",
            
        },
        {
            src: "icons/logo_512x512.png",
            sizes: "512x512",
            type: "image/png",
            
        }
    ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    }
  },
    css: ["~/assets/css/main.css"],
    postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})
