import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
