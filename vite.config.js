import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ command, mode }) => {
  if (command === "serve") {
    return {
      base: "",
      plugins: [vue()],
      server: {
        host: "0.0.0.0",
      },
    };
  } else if (command === "build") {
    return {
      base: "/MEMORY.IO/",
      plugins: [vue()],
      server: {
        host: "0.0.0.0",
      },
    };
  }
});
