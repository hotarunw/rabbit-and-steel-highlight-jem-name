import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import packageJson from "./package.json" assert { type: "json" };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        name: packageJson.name,
        namespace: "https://github.com/hotarunw",
        version: packageJson.version,
        author: packageJson.author,
        description: packageJson.description,
        homepage: packageJson.homepage,
        match: [
          "https://note.com/nonspell1/n/n2419cd914c84",
          "https://steamcommunity.com/sharedfiles/filedetails/?id=3273533065",
          "https://wikiwiki.jp/rabbit-a-s/*",
          "https://rns.miraheze.org/wiki/*",
        ],
        exclude: ["https://wikiwiki.jp/rabbit-a-s/::cmd/*"],
        license: packageJson.license,
      },
    }),
  ],
});
