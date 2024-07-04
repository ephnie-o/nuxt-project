// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-02",
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: 'First Nuxt Project',
      meta: [
        { name: 'description', content: 'My first Nuxt project'}
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
});