import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://denodell.com",
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	output: "static",
	trailingSlash: "never",
});
