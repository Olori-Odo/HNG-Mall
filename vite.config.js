import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

// import { defineConfig } from "vite";
import { version } from "./package.json";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].${version}.js`,
        chunkFileNames: `[name].${version}.js`,
        assetFileNames: `[name].${version}.[ext]`,
      },
    },
  },
});

// export default {
//   // ... other configurations
//   server: {
//     watch: {
//       // Add custom paths to watch for full page refreshes
//       additionalPaths: (watcher) => {
//         watcher.add("C:Usersomo_oDesktophng-mall");
//       },
//     },
//   },
// };
