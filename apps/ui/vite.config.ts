/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import million from "million/compiler"
import MillionCompiler from "@million/lint"
import generouted from "@generouted/react-router/plugin"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 3110,
      host: "0.0.0.0",
    },
    plugins: [MillionCompiler.vite(), million.vite({ auto: true }), react(), generouted()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
      },
    },
    build: {
      target: "esnext",
      sourcemap: ["development", "staging"].includes(mode) ? true : false,
    },
    test: {
      setupFiles: "./setupTest.js",
      globals: true,
      environment: "jsdom",
    },
  }
})
