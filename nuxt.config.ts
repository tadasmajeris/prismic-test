import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/prismic'],
  prismic: {
    endpoint: 'tadan-test',
    linkResolver: "~/prismic/linkResolver",
  }
})
