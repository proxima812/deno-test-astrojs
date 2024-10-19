import mdx from "@astrojs/mdx"
import { defineConfig } from "astro/config"
import deno from "@deno/astro-adapter"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [mdx(), sitemap()],
	output: "server",
	adapter: deno(),
})
