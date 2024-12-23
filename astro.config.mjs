import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import expressiveCode from "astro-expressive-code";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import netlify from '@astrojs/netlify'
/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions} */
import mdx from "@astrojs/mdx";


const astroExpressiveCodeOptions = {
  // Example: Change the theme to "dracula"
  // theme: 'dracula',
  styleOverrides: {
    codeFontSize: "1.1rem"
  }
};


// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "at re:Invent Guide",
    components: {
      Hero: "/src/components/hero.astro"
    },
    favicon: '/src/assets/img/osmo.png',
    logo: {
      dark: "/src/assets/img/ToggleTunes.png",
      light: "/src/assets/img/ToggleTunes.png"
    },
    customCss: ["./src/styles/custom.css", "./src/styles/index.module.css", "./src/tailwind.css"],
    social: {
      github: "https://github.com/launchdarkly-labs/talkin-ship-workshop-guide"
    },
    sidebar: [{
      label: "Intro - Queue Up The Track!",
      link: "/introduction"
    }, {
      label: "Task List",
      // Autogenerate a group of links for the 'guides' directory.
      autogenerate: {
        directory: "workshop"
      }
    }]
  }), react(), expressiveCode(astroExpressiveCodeOptions), tailwind(), mdx()],
  name: "LaunchDarkly ToggleTunes Booth Experience",
 
  trailingSlash: "never",
  output: 'server',
//   image: {
//     // Example: Use a custom image endpoint
//     endpoint: '',
//   },
  adapter: netlify(),
//   output: "hybrid",
//   adapter: node({
//     mode: 'standalone',
//   }),
  server: {
    port: 3000,
    host: true
  }
});