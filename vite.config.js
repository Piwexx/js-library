import { defineConfig } from 'vite'
import  path from 'path'

export default defineConfig({
  build:{
    lib:{
      entry: path.resolve(__dirname,"./src/main.js"),
      name:"js-library",
      formats:["es","umd"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions:{
      external:[]
    }
  }
})