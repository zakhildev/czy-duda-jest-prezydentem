// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Allow: '/',
      },
    ],
    '@nuxtjs/sitemap',
    'nuxt-link-checker',
    'nuxt-schema-org',
  ],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ['~/assets/css/main.css'],
  ssr: true,
  telemetry: false,
  app: {
    head: {
      title: 'Czy Andrzej Duda jest prezydentem?',
      charset: 'utf-8',
      meta: [
        {
          name: 'description',
          content: 'Ile czasu Andrzej Duda będzie jeszcze prezydentem RP?',
        },
      ],
      noscript: [
        {
          innerHTML:
            'Ta strona do poprawnego działania wymaga włączonego JavaScript!',
        },
      ],
      htmlAttrs: {
        lang: 'pl',
      },
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/robots.txt'],
    },
  },
  site: {
    url: 'https://czydudajestprezydentem.zakhil.dev',
    name: 'Czy Duda jest prezydentem?',
  },
  sitemap: {
    cacheMaxAgeSeconds: 3600,
  },
});
