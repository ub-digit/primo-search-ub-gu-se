import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { loadingScript } from 'vite-plugin-loading-script'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), loadingScript({
    externalSrc: "https://ub-digit.github.io/primo-search-ub-gu-se/search-primo/dist/", // Will prefix a url to load from.
    fileName: 'app.5dae9ca5.js.5dae9ca5.js.5781caf9.js.5781caf9.js.42d35c32.js.51825ff9.js', // app.[hash].js
    crossorigin: false, // Will add the 'crossorigin' attribute to the entry script
    //crossoriginVal: string // The value to set for the 'crossorigin' attribute
  })],
})
