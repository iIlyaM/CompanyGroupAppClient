export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxtjs/ionic"],
    ionic: {
        integrations: {
            icons: false,
        },
    },
    css: [
        '~/assets/styles/__global.css',
    ],
})